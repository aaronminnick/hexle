# Hexle (working name)

This will be a browser game, similar to wordle, to have people guess the correct hex color. Since existing games on this concept are basically straight wordle clones, I'd like to expand on the idea by adding a more interactive element. My current idea for theme is to have a wizard mixing the correct color potions which will then be thrown at slimes/ghosts/some other kind of monster to banish them. If you keep guessing wrong, the monster will gradually move closer to the wizard until you lose.

Since hex colors are non-intuitive for people who haven't done much with them before, I plan to have an 'easy' mode, where people will be presented with 3 hex pairs and just need to match them to the right colors, instead of putting all 6 individual characters in the right order. Even in normal mode, I will likely still show the 6 characters to be used and the gameplay will be more about beating the clock than guessing from scratch.

Once the proof of concept logic is in place, this will be converted to a React App, since that should be easier to present a dynamic game, and allow for consecutive rounds without refreshing.