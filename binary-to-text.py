#!/usr/bin/env python3

import sys
import re

def is_valid_binary_segment(segment):
    """Validate if a binary segment is exactly 8 bits."""
    return re.fullmatch(r'[01]{8}', segment) is not None

def binary_to_text(binary_input):
    try:
        # Clean the input: remove unexpected characters and split by spaces
        binary_segments = binary_input.strip().split()

        # Validate each binary segment
        for segment in binary_segments:
            if not is_valid_binary_segment(segment):
                return f"❌ Error: Invalid binary segment detected: '{segment}'. Please use 8-bit binary numbers."

        # Convert binary to text
        chars = [chr(int(b, 2)) for b in binary_segments]
        return ''.join(chars)

    except Exception as e:
        return f"❌ Error: {e}"

def main():
    if len(sys.argv) < 2:
        print("❗ Usage: python3 binary-to-text.py 'binary_input'")
        sys.exit(1)

    binary_input = ' '.join(sys.argv[1:])

    # Convert and display output
    text_output = binary_to_text(binary_input)
    print(f"🔢 Binary Input:\n{binary_input}\n")
    print(f"📝 Decoded Text:\n{text_output}")

if __name__ == "__main__":
    main()
