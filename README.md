A combination of HTML, CSS, and Javascript which will render a stylized table containing attributes
about users obtained from JSON encoded data. This table is navigable using the keyboard.

Programmatically produces a valid html table by reading in the data contained in `users.json`.

Allows a user to be able to click any part of the table row. The user is then directed to the relative url `users.html#id`
where `id` is the user id of the currently selected user. The `users.html` is a blank document with no included functionality.

The user is able to navigate the table using the up and down arrow keys
on their keyboard. When the keyboard arrows are used, the appropriate row
should be highlighted to indicate the selection. When the enter key is pressed,
the user is directed to the url associated with that row. 
Had to ensure that I overrode the arrow key's default behavior and made
considerations for how users can see selected rows that are
outside of the user's viewport.
