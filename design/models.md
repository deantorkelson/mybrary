## Books
#### Relations
 - belongs to
    - author
    - genre
    - series
 
#### Fields
 - Title
 - Synopsis
 - Review
 - Rating
 - Finished?
 
## Authors
#### Relations
 - has many
    - books
    - series
 
#### Fields
 - name

## Genres
#### Relations
 - has many
    - books
 
#### Fields
 - description
 
## Series
#### Relations
 - has many
    - books
 - belongs to
    - author
 
#### Fields
 - title
 - description