module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-selector-bem-pattern',
    'stylelint-declaration-use-variable',
  ],
  rules: {
    // CSS formatting
    indentation: 2,
    'declaration-empty-line-before': null,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'content', 'include', 'at-root', 'if'] }],

    'sh-waqar/declaration-use-variable': [['/color/', 'font-family']],
  },
};

/*
# based on SMACSS Property Order
# http://smacss.com/book/formatting

# Heading

content
quotes

# Box

display
visibility

position
z-index
top
right
bottom
left

box-sizing

flex
flex-basis
flex-direction
flex-flow
flex-grow
flex-shrink
flex-wrap
align-content
align-items
align-self
justify-content
order

width
min-width
max-width
height
min-height
max-height

margin
margin-top
margin-right
margin-bottom
margin-left

padding
padding-top
padding-right
padding-bottom
padding-left

float
clear

overflow
overflow-x
overflow-y

clip
zoom

columns
column-gap
column-fill
column-rule
column-span
column-count
column-width

table-layout
empty-cells
caption-side
border-spacing
border-collapse
list-style
list-style-position
list-style-type
list-style-image

# Animation

transform
transform-origin
transform-style
backface-visibility
perspective
perspective-origin

transition
transition-property
transition-duration
transition-timing-function
transition-delay

animation
animation-name
animation-duration
animation-play-state
animation-timing-function
animation-delay
animation-iteration-count
animation-direction

# Border

border
border-top
border-right
border-bottom
border-left
border-width
border-top-width
border-right-width
border-bottom-width
border-left-width

border-style
border-top-style
border-right-style
border-bottom-style
border-left-style

border-radius
border-top-left-radius
border-top-right-radius
border-bottom-left-radius
border-bottom-right-radius

border-color
border-top-color
border-right-color
border-bottom-color
border-left-color

outline
outline-color
outline-offset
outline-style
outline-width

stroke-width
stroke-linecap
stroke-dasharray
stroke-dashoffset
stroke

# Background

opacity

background
background-color
background-image
background-repeat
background-position
background-size
box-shadow
fill

# Text

color

font
font-family
font-size
font-size-adjust
font-stretch
font-effect
font-style
font-variant
font-weight

font-emphasize
font-emphasize-position
font-emphasize-style

letter-spacing
line-height
list-style
word-spacing

text-align
text-align-last
text-decoration
text-indent
text-justify
text-overflow
text-overflow-ellipsis
text-overflow-mode
text-rendering
text-outline
text-shadow
text-transform
text-wrap
word-wrap
word-break

text-emphasis
text-emphasis-color
text-emphasis-style
text-emphasis-position

vertical-align
white-space
word-spacing
hyphens

src

# Other

tab-size
counter-reset
counter-increment
resize
cursor
pointer-events
speak
user-select
nav-index
nav-up
nav-right
nav-down
nav-left
 */
