### Books
#### Relations
 - has one
 -- series
 
 - has many
 -- authors
 -- genres
 
#### Fields
 - Title
 - Synopsis
 - Review
 - Rating
 - Finished?
 
### Authors
#### Relations
 - has many
 -- books
 -- series
 
#### Fields
 - name

### Genres
#### Relations
 - has many
 -- books
 
#### Fields
 - description
 
### Series
#### Relations
 - has one
 -- author
 - has many
 -- books
 
#### Fields
 - title
 - description