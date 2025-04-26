# Canvas Discussion Collector Bookmarklet

🚀 **Version 1.0**

A lightweight JavaScript bookmarklet for collecting discussion board posts across multiple pages in Canvas LMS.

Easily grab:
- Only **initial posts**  
- Only **replies**  
- **Both** initial posts and replies  

Export your collection either by:
- 📋 Copying it directly to your clipboard
- 📄 Downloading it as a `.txt` file

---

## Features

- ✅ **Multi-page collecting**: Gather posts across any number of Canvas discussion pages.
- ✅ **Progress tracking**: See a confirmation after each page you collect.
- ✅ **Choice of content**: Collect replies, initial posts, or both.
- ✅ **Export options**: Copy to clipboard or download as a `.txt` file.
- ✅ **Auto-expand hidden replies**: No need to manually expand them!
- ✅ **Wrong-page detection**: Warns you if you're not on a Canvas discussion page.

---

## Installation

1. **Create a new bookmark** in your browser's bookmarks bar.
2. **Name** it something like `Canvas Discussion Collector`.
3. **Paste the bookmarklet code** (found in this repository) into the **URL** or **Location** field.
4. **Save** the bookmark.

---

## How to Use

1. Navigate to your **Canvas LMS discussion board** (the page URL should include `/discussion_topics/`).
2. **Click the bookmarklet**.
3. Choose what you want to collect:
   - `1` = Only Replies
   - `2` = Only Initial Posts
   - `3` = Both
4. **Click the bookmarklet once per page** after manually selecting the next page number.
5. After collecting all pages, **click the green "🚀 Finish Collection" button** that appears on the bottom right.
6. Choose to either:
   - 📋 Copy to clipboard
   - 📄 Download collected posts as a `.txt` file

---

## Notes

- **Page navigation is manual**: Be sure to click page numbers at the bottom of the discussion instead of "Next" links that might navigate away.
- **Replies must be visible**: The script automatically attempts to expand collapsed replies, but verify if they load correctly before scraping.
- **Canvas versions may vary**: Tested on Canvas LMS as of April 2025 (Classic Discussion View).

---

## License

MIT License.

---

## Credits

Built using pure JavaScript.  
Created by zakorlloyd 👨‍💻
