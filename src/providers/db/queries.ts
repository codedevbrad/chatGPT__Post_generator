// import prisma model.
// import fakeDb.

const posts = { 
    findById: ( userId ) => null;
};


// fetch all posts by a specific user.
export const fetchPostsForUser = ( userId ) => {
    if ( process.env.NODE_ENV === 'development' ) {
        return posts.findById( userId );
    } 
    else if ( process.env.NODE_ENV === 'production' ) {
        return posts.findById( userId );
    }
}