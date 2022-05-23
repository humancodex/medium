export interface Post {
_id: string
_createdAt:string;
title:string;
author:{
    name:string;
    image:string;
};
comments: Comment[];
description:string;
mainImage:{
 asset:{
  url: string;    
 };
};
slug:{
 current:string;
};
body:[object];
}
//our post knows our comments array 
export interface Comment {
approved: boolean;
comment :string;
email:string;
name:string;
post:{
    _ref:string;
    _type:string;
};
_createdAt:string;
_id:string;
_rev:string;
_type:string;
_updatedAt:string;

}


//first change de schema on medium sanity 
//second change the query on slug sanity query 
//third change typings for comments 