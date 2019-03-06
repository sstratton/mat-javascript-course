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

    Background: Ensure product isn't in the system
        Given a product doesn't exist
            | name    | description       | price |
            | carrots | orange vegetables | 10    |    

    Scenario: A product is added
        When I add the product
        Then the product is added


