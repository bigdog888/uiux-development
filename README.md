# Development

### Link to Deployed Website
If you used the stencil code, this is `https://bigdog888.github.io/uiux-development`

### Goal and Value of the Application
To create a version of our bakery store page from the react studio but with more functionality and sorting/filtering features!

### Usability Principles Considered
I considered the usability principles of layout and hierarchy by making sure that the sort/filter part and the shopping cart were easily visible by keeping them always present on the right side of the screen. Additionally, I broke down the right-hand sidebar into a list of filters, a sort feature, and the cart at the bottom, as well as labels for these different features. As far as hierarchy, I made the names of the items present at the top above the image, and the prices and options to add and remove them from the shopping cart present below the image.

### Organization of Components
I break down the website in total into 2 major components: the shopping cart, consisting of the actual cart itself (a list of items),
and the current total price (represented by a decimal rounded to 2 significant figures). Additionally, the other major component is
the bakeryItem component, which makes up the menu for ordering pastries from the bakery website. I use function components to keep 
track of whether the menu is being sorted and/or filtered, as well as the names on the filter buttons (start/stop filtering), and 
the add/remove to/from cart buttons. 

### How Data is Passed Down Through Components

### How the User Triggers State Changes

