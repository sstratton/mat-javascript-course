Feature: Product Management

    User Story:
    As a user...

    Rules (acceptance critera):
    1. Price - boundaries 1-100 (can't be negative)
    2. Product names: format is....
    3. A user must be able to add a product
    4. Dublicates are not allowed

    Question:
    1. Is there a search function?

    Glossary:
    User = an administrator

    Scenario Outline: A product is added
        Given a product with name "<name>" and description "<description>" and price "<price>" doesn't exist
        When I add the product
        Then the product is added
        Examples:
            | name    | description | price |
            | carrots | orange      | 10    |
            | fish    | slimy       | 20    |


