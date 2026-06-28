# Mercury Retrograde Tracker Widget

A dark-themed Notion widget that displays real-time Mercury retrograde phases for 2026. The widget dynamically updates based on the current date and shows phase-specific guidance.

## Features

- 🌙 Dark theme optimized for Notion embeds
- 📅 Automatic date-based phase detection
- ✨ 5 distinct retrograde phases with custom messaging
- 📱 Responsive design
- 🎨 Modern card-based UI

## 2026 Mercury Retrograde Dates

**Period: July 29 - August 21, 2026**

### Phases

1. **Phase 1: Pre-Retrograde Shadow** (July 29-31)
   - Mercury slows before turning retrograde
   - Miscommunications and tech glitches begin

2. **Phase 2: Retrograde Begins** (August 1-5)
   - Mercury officially retrograde
   - Time to review, revise, reconsider
   - Not ideal for launches

3. **Phase 3: Peak Retrograde** (August 6-13)
   - Maximum effects period
   - Communication breakdowns likely
   - Stay flexible with decisions

4. **Phase 4: Retrograde Wind Down** (August 14-21)
   - Mercury preparing to turn direct
   - Clarity returning
   - Finalize plans and loose ends

5. **Phase 5: Shadow Period** (August 22 - September 10)
   - Mercury direct but in shadow zone
   - Lingering effects persist
   - Caution advised

## How to Use

### Option 1: Direct HTML File
Open `index.html` in a browser or embed it in Notion using an embed block.

### Option 2: Deploy to Notion as Embed
1. Host this file on a web server (Vercel, Netlify, GitHub Pages, etc.)
2. In Notion, create an **Embed** block
3. Paste the hosted URL

## Files

- `index.html` — Complete widget with embedded CSS and JavaScript
- `styles.css` — Styling (if you want to separate concerns)
- `script.js` — Logic (if you want to separate concerns)

## Customization

### Change Colors
Modify the color values in the `<style>` section:
- `background: #191919` — Dark background
- `color: #63B3ED` — Accent color (blue)
- `#1A2638` — Badge background

### Update Dates
Edit the date comparisons in the `<script>` section:
```javascript
const retrograde1Start = new Date('2026-07-29');
const retrograde1End = new Date('2026-08-21');
```

### Add More Retrograde Periods
The widget can be extended to include multiple retrograde periods throughout the year. Add additional date ranges and phase logic as needed.

## Browser Support

Works in all modern browsers. Notion embeds support standard HTML5, CSS3, and ES6 JavaScript.
