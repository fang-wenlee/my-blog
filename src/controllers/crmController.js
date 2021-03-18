import mongoose from 'mongoose'

import { ArticleSchema } from '../models/crmModel'

const Article = mongoose.model('Article',  ArticleSchema);

export const addnewArticle = (req, res) =>{

    let newArticle = new Article(req.body);
    newArticle.save((err, article) =>{
        if(err){
            res.send(err)
        }
        res.json(article)
    })
}
export const addArticleUpvote =(req, res) =>{
 

        Article.findOneAndUpdate({name: req.params.name }, { $inc: { upvotes: 1 } }, {new: true, useFindAndModify: false }, (err, article)=>{
            if (err) { 
                res.send(err);
            } 
            else { 
               
               res.status(200).json(article);
            //console.log(db_res);  JSON.stringify() 
            } 
        });
}

export const addArticleComment =(req, res) =>{
 
    const {username, text} = req.body;
    const commentNew = {
        username: username,
        text: text,
      };
   
    Article.findOneAndUpdate({name:req.params.name}, {$push: { comment: commentNew}} , {new: true, useFindAndModify: false }, (err, article)=>{
         if (err) { 
            res.send(err);
        } 
        else { 
            res.json(article)
         
           //console.log(db_res); 
        } 
      });
    }


export const deleteComment = (req, res) =>{
  
        const {username} = req.body;
        const commentObj = {
            username: username,
           
          };

        Article.updateOne({name:req.params.name}, {$pull: { comment: commentObj}} , {new: true, useFindAndModify: false }, (err, article)=>{
            if (err) { 
               res.send(err);
           } 
           else { 
            
               res.status(200).json(article)
              // res.json({message: 'successful deleted Comment'})
           } 
         });
}

export const getArticles = (req, res) =>{

    Article.find({}, (err, article) =>{
        if(err){
            res.send(err)
        }
        res.json(article)
    });
}


export const getArticleWithId = (req, res) =>{  
    Article.findById( req.params.id , (err, article) =>{
        if(err){
            res.send(err)
        }
        res.json(article)
    });
}
export const updateArticleWithId= (req, res) =>{
    Article.findOneAndUpdate( { _id: req.params.id}, req.body, {new: true, useFindAndModify: false }, (err, article) =>{
        if(err){
            res.send(err)
        }
        res.json(article)
    });
}



export const getArticleWithName = (req, res) =>{
 
    Article.find( {name: req.params.name}, (err, article) =>{
        if(err){
            res.send(err)
        }
        res.json(article)
    });
}



export const updateArticleWithName= (req, res) =>{
    Article.findOneAndUpdate( { name: req.params.name}, req.body, {new: true, useFindAndModify: false }, (err, article) =>{
        if(err){
            res.send(err)
        }
        res.json(article)
    });
}
export const deleteArticleWithName = (req, res) =>{
        Article.remove( { name: req.params.name },  (err, article) =>{
            if(err){
                res.send(err)
            }
            res.json({message: 'successful deleted Article'})
        });
    }

export const deleteArticleWithId = (req, res) =>{

   
    Article.remove( { _id: req.params.id },  (err, article) =>{
        if(err){
            res.send(err)
        }
        res.json({message: 'successful deleted contact'})
    });
}