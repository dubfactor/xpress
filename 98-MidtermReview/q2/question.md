What do the following CSS selectors select?  For bonus points, please provide an example via a Plunker, jsbin or CodePen (come back to this after you have attempted other questions).

    div + p
    div p
    div, p
    div > p
    div ~ p

### Solution here please ...

    div + p
        Selects all <p> elements that are placed immediately after <div> elements
    div p
        Selects all <p> elements inside <div> elements
    div, p
        Selects all <div> elements and all <p> elements
    div > p
        Selects all <p> elements where the parent is a <div> element
    div ~ p
        Selects every <p> element that are preceded by a <div> element