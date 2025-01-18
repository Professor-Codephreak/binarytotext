#!/usr/bin/env python3

import sys

def binary_to_text(binary_input):
    try:
        # Split input by spaces and convert each binary to a character
        chars = [chr(int(b, 2)) for b in binary_input.split()]
        return ''.join(chars)
    except ValueError:
        return "⚠️ Error: Invalid binary format. Ensure input is valid 8-bit binary numbers."
    except Exception as e:
        return f"Error: {e}"

def main():
    if len(sys.argv) < 2:
        print("❗ Usage: python3 binary-to-text.py 'Your binary input here'")
        sys.exit(1)

    binary_input = ' '.join(sys.argv[1:])
    text_output = binary_to_text(binary_input)
    print(f"🔢 Binary Input:\n{binary_input}\n")
    print(f"📝 Decoded Text:\n{text_output}")

if __name__ == "__main__":
    main()
