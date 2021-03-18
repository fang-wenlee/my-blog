import { addnewArticle, 
         getArticles,   
         getArticleWithName, 
         updateArticleWithName, 
         deleteArticleWithName, 
         getArticleWithId, 
         updateArticleWithId, 
         deleteArticleWithId, addArticleUpvote, addArticleComment, deleteComment} from '../controllers/crmController'

const routes = (app) =>{
   // retrieve article
    app.route('/api/articles')
       .get((req,res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
       }, getArticles )

      //enter new article
       .post(addnewArticle);
   
      //retrieve a specific article; 
     app.route('/api/articles/:name')      
          .get(getArticleWithName) 
          .put(updateArticleWithName)
          .delete(deleteArticleWithName  );
      
      app.route('/api/articles/:name/upvote') 
            .post(addArticleUpvote)
            

      app.route('/api/articles/:name/comment') 
            .post(addArticleComment)  
            .delete(deleteComment)
            
     app.route('/articles/:id')      
           .get(getArticleWithId) 
           .put(updateArticleWithId)  
           .delete (deleteArticleWithId );


}

export default routes;