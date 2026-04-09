import discord
import os
import json
import io
import google.generativeai as genai
from PIL import Image

# 1. AUTHENTICATION
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
ai_model = genai.GenerativeModel('gemini-3-flash-preview')
intents = discord.Intents.all()
bot = discord.Client(intents=intents)

# 2. THE PATHS (Linking Shiestybot to the React App)
# We use the 'public' folder because React serves these files directly
WEB_PATH = 'public/data/inventory.json'

def load_data():
    if not os.path.exists(WEB_PATH):
        # Create it if it doesn't exist
        return {}
    with open(WEB_PATH, 'r') as f:
        return json.load(f)

def save_data(data):
    with open(WEB_PATH, 'w') as f:
        json.dump(data, f, indent=4)

@bot.event
async def on_ready():
    print(f'SHIESTY VISION ONLINE - Logged in as {bot.user}')

@bot.event
async def on_message(message):
    # Scans the specific sync channel
    if message.channel.name == "sync-stash" and message.attachments:
        await message.channel.send("🕵️ **SCANNING FOR BLUEPRINTS...**")
        
        img_data = await message.attachments[0].read()
        img = Image.open(io.BytesIO(img_data))
        
        prompt = """
        Analyze this ARC Raiders screenshot.
        Identify icons with a gold/yellow frame (Blueprints).
        Compare names to the 77-blueprint tracker.
        Return ONLY valid JSON: {"found": ["Name1", "Name2"]}
        """
        
        response = ai_model.generate_content([prompt, img])
        
        try:
            res_text = response.text.strip('`').replace('json', '').strip()
            result = json.loads(res_text)
            
            inventory = load_data()
            found_items = result.get('found', [])
            
            for item in found_items:
                # Update count
                inventory[item] = inventory.get(item, 0) + 1
            
            save_data(inventory)
            
            embed = discord.Embed(title="🚨 STASH SYNCED", color=0xDC2626)
            embed.add_field(name="📦 DETECTED", value="\n".join(found_items) or "None")
            await message.channel.send(embed=embed)
            
        except Exception as e:
            await message.channel.send("❌ Error reading stash icons.")

bot.run(os.getenv('DISCORD_TOKEN'))