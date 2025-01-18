# binary-to-text

# 🖥️ Binary to Text Converter

## 📚 Description

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

text2bin Hello
Output:

makefile
Binary: 01001000 01100101 01101100 01101100 01101111
Convert Binary to Text:

bin2text 01001000 01100101 01101100 01101100 01101111
Output:

makefile
Text: Hello

---------------------------

This Python program converts binary strings into human-readable text. It is designed to work seamlessly in both command-line interfaces and UI integrations like **terminal.js**.

## 🚀 Features

- Converts **space-separated binary strings** into text.
- **Error handling** for invalid input.
- Optimized for **terminal.js** integration.
- Clear and user-friendly prompts.

## 🛠️ Requirements

- Python 3.x

## 📦 Installation

```bash
git clone https://github.com/Professor-Codephreak/binary-to-text-converter.git
cd binary-to-text-converter
python binary_to_text.py
```
📖 Usage
🔹 Command-Line Mode
```bash
python3 binary_to_text.py
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
```prompt


Example Input:

Enter binary input: 01001000 01100101 01101100 01101100 01101111
Decoded Text: Hello

🔹 UI Integration (Terminal.js)

This script is built for easy integration with web-based terminal interfaces.

Use the function binary_to_text() in your backend and pass user input for smooth UI experience.

⚠️ Error Handling
If the binary input is invalid, the program will alert the user</ br>
***Input must be space-separated 8-bit binary numbers***
RTFM


## 📝 **binary_to_text.py**

```python
#!/usr/bin/env python3
"""
Binary to Text Converter
Author: Gregory L. Magnusson
Description: Converts binary strings into human-readable text with robust error handling

🔍 Code Explanation
🔹 Function: binary_to_text(binary_input)
Purpose: Converts a space-separated binary string into readable text.
Validation: Checks if input is empty, validates each segment for correct format (only 0 and 1), and ensures 8-bit segments.
Error Handling: Returns user-friendly error messages if invalid data is detected.
Conversion: Converts each valid 8-bit binary segment to its corresponding ASCII character.
🔹 Function: main()
Interactive CLI: Allows users to input binary data continuously.
Exit Command: Typing 'exit' cleanly ends the program.
Error Handling: Catches interruptions (Ctrl+C) and provides a friendly exit message.
🔌 Integration with xterm.js
UI Compatibility: This script is designed to be easily integrated with xterm.js from script.js with style.css
Backend Usage: Call the binary_to_text() function with user input from the frontend.


🔎 Example Inputs and Outputs
✅ Valid Input:
```vbnet
Input: 01001000 01100101 01101100 01101100 01101111
Output: ✅ Decoded Text: Hello
⚠️ Invalid Input (Non-Binary Character):
```vbnet

Input: 01001000 01100101 01101100 0110a11
Output: ⚠️ Error: Invalid binary segment detected -> '0110a11'. Only 0 and 1 are allowed.
⚠️ Invalid Input (Wrong Length):
```vbnet
Input: 0100100 01100101 01101100
Output: ⚠️ Error: Each binary segment must be 8 bits. Error at -> '0100100'.
```
📜 License
MIT License
binary-to-text (c) Gregory L. Magnusson MIT License. Feel free to modify and distribute.

🔧 Built for Developers
💡 Designed for Simplicity
🔒 Powered by Logic
