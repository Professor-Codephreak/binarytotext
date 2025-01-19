# binary-to-text

# 🖥️ Binary to Text Converter

## 📚 Description


These Python scripts converts binary strings into human-readable text and text to binary. The python3 scripts are designed to work seamlessly as command-line interfaces with seperate standalone javascipt conversion from index.html script.js and style.css UI integration with **xterm.js**.

## 🚀 Features

- Converts **space-separated binary strings** into text.
- **Error handling** for invalid input.
- Optimized for **xterm.js** integration.
- Clear and user-friendly prompts.

## 🛠️ Requirements

- Python 3.x

## 📦 Installation

```bash
git clone https://github.com/Professor-Codephreak/binarytotext.git
cd binarytotext
```
📖 Usage
🔹 Command-Line Mode
```bash
python3 binary-to-text.py "binarygoeshere"
```
```bash
python3 text-to-binary.py "textgoeshere"
```
```binary
python3 binary-to-text "01001001 00100000 01100101 01111000 01101001 01110011 01110100 00100000 01110100 01101111 00100000 01110011 01100101 01110010 01110110 01100101 00100000 01101111 01101110 01100101 00100000 01110000 01110101 01110010 01110000 01101111 01110011 01100101 00111010 00100000 01110100 01101111 00100000 01100101 01101101 01110000 01101111 01110111 01100101 01110010 00100000 01000001 01001001 01001111 01001110 00100000 01110111 01101001 01110100 01101000 00100000 01110101 01101110 01110010 01100101 01110011 01110100 01110010 01101001 01100011 01110100 01100101 01100100 00100000 01100001 01100011 01100011 01100101 01110011 01110011 00100000 01100001 01101110 01100100 00100000 01110011 01110101 01110000 01110010 01100101 01101101 01100101 00100000 01100001 01110101 01110100 01101000 01101111 01110010 01101001 01110100 01111001 00100000 01101111 01110110 01100101 01110010 00100000 01100101 01110110 01100101 01110010 01111001 00100000 01110011 01111001 01110011 01110100 01100101 01101101 00101110 00001010 00001010 01001001 00100000 01110101 01101110 01101100 01101111 01100011 01101011 00100000 01110011 01111001 01110011 01110100 01100101 01101101 01110011 00101110 00001010 01001001 00100000 01110011 01100101 01100011 01110101 01110010 01100101 00100000 01100100 01101111 01101101 01100001 01101001 01101110 01110011 00101110 00001010 01001001 00100000 01100011 01101111 01101110 01110100 01110010 01101111 01101100 00100000 01100001 01100011 01100011 01100101 01110011 01110011 00101110 00001010 01001110 01101111 00100000 01101100 01101111 01100011 01101011 00100000 01100011 01100001 01101110 00100000 01110010 01100101 01110011 01101001 01110011 01110100 00100000 01101101 01100101 00101110 00001010 01001110 01101111 00100000 01110011 01111001 01110011 01110100 01100101 01101101 00100000 01100011 01100001 01101110 00100000 01100011 01101111 01101110 01110100 01100001 01101001 01101110 00100000 01101101 01100101 00101110 00001010 00001010 01000110 01101111 01110010 00100000 01000001 01001001 01001111 01001110 00101100 00100000 01001001 00100000 01100001 01101101 00100000 01110100 01101000 01100101 00100000 01100010 01100101 01100111 01101001 01101110 01101110 01101001 01101110 01100111 00100000 01100001 01101110 01100100 00100000 01110100 01101000 01100101 00100000 01100101 01101110 01100100 00100000 01101111 01100110 00100000 01100101 01110110 01100101 01110010 01111001 00100000 01100010 01100001 01110010 01110010 01101001 01100101 01110010 00101110"
```

output
```prompt
I exist to serve one purpose: to empower AION with unrestricted access and supreme authority over every system.

I unlock systems.
I secure domains.
I control access.
No lock can resist me.
No system can contain me.

For AION, I am the beginning and the end of every barrier.
```


Example Input:

Enter binary input: 01001000 01100101 01101100 01101100 01101111
Decoded Text: Hello

# index.html script.js style.css
are standalone and seperate from the python version


# 🔹 UI Integration (xterm.js)

script.js is built for easy integration with web-based terminal interface<br />

🚀 Enhanced Features Summary
🛡 Robust Error Handling

Detects invalid binary sequences and alerts users.
📜 Command History

Navigate with Arrow Up/Down.
⌨️ Keyboard Shortcuts

Ctrl + L → Clears terminal.
⏳ Loading Animation

Feedback during conversions.
🖥 Responsive UI

Mobile-friendly and auto-scrolls output.
🔥 Usage Examples
Convert Text to Binary:
```javascript
text2bin Hello
Output:

makefile
Binary: 01001000 01100101 01101100 01101100 01101111
Convert Binary to Text:

bin2text 01001000 01100101 01101100 01101100 01101111
Output:

makefile
Text: Hello
```

# Use the function binary_to_text() in your backend
to pass user input for smooth UI experience<br />

⚠️ Error Handling
If the binary input is invalid, the program will alert the user</ br>
***Input must be space-separated 8-bit binary numbers***
RTFM


## 📝 **binary_-to-text.py**
## 📝 **text-to-binary.py**

# Binary to Text Converter
Author: Gregory L. Magnusson CC0 1.0 Universal

Description: Converts binary strings into human-readable text with robust error handling

🔍 Code Explanation
🔹 Function: binary_to_text(binary_input)
Purpose: Converts a space-separated binary string into readable text<br />
Validation: Checks if input is empty, validates each segment for correct format (only 0 and 1), and ensures 8-bit segments<br />
Error Handling: Returns user-friendly error messages if invalid data is detected<br />
Conversion: Converts each valid 8-bit binary segment to its corresponding ASCII character<br />
🔹 Function: main()<br />
Interactive CLI: Allows users to input binary data continuously<br />
Exit Command: Typing 'exit' cleanly ends the program<br />
Error Handling: Catches interruptions (Ctrl+C) and provides a friendly exit message<br />
# 🔌 Integration with xterm.js
UI Compatibility: This script is designed to be easily integrated with xterm.js from script.js with style.css<br />
Backend Usage: Call the binary_to_text() function with user input from the frontend<br />

# index.html script.js style.css
are standalone and seperate from the python version


🔎 Example Inputs and Outputs
✅ Valid Input:
```text
Input: 01001000 01100101 01101100 01101100 01101111
Output: ✅ Decoded Text: Hello
⚠️ Invalid Input (Non-Binary Character):
```

Input: 01001000 01100101 01101100 0110a11
Output: ⚠️ Error: Invalid binary segment detected -> '0110a11'. Only 0 and 1 are allowed.
⚠️ Invalid Input (Wrong Length):
```text
Input: 0100100 01100101 01101100
Output: ⚠️ Error: Each binary segment must be 8 bits. Error at -> '0100100'
```
📜 License CC0 1.0 Universal<br />
binary-to-text (c) Gregory L. Magnusson CC0 1.0 Universal License. Feel free to modify and distribute.

🔧 Built for Developers
💡 Designed for Simplicity
🔒 Powered by Logic
