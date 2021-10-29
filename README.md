## Spec Tests

### Description: roboRogers()
*Test:* "It should return "0" if the number "0" is inputted."
*Code:* roboRogers("0");
*Expected output:* "0"

*Test:* "It should return "Beep!" if the number "1" is inputted."
*Code:* roboRogers("1");
*Expected output:* "Beep!"

*Test:* "It should return "Boop!" if the number "2" is inputted."
*Code:* roboRogers("2");
*Expected output:* "Boop!"

*Test:* "It should return "Won't you be my neighbor?" if the number "3" is inputted."
*Code:* roboRogers("3");
*Expected output:* "Won't you be my neighbor?"

*Test:* "It should the same output as the value inputted for numbers 4 - 9."
*Code:* roboRogers("5");
*Expected output:* "5"

*Test:* "When given a string of numbers, it should replace "1" with "Beep! and leave the remaining numbers intact."
*Code:* roboRogers("1231");
*Expected output:* "Beep! 2 3 Beep!"

*Test:* "When given a string of numbers, it should replace "2" with "Boop!" and leave the remaining numbers intact."
*Code:* roboRogers("1221");
*Expected output:* "1 Boop! Boop! 1"

*Test:* "When given a string of numbers, it should replace "3" with "Won't you be my neighbor?" and leave the remaining numbers intact."
*Code:* roboRogers("123");
*Expected output:* "1 2 Won't you be my neighbor?"