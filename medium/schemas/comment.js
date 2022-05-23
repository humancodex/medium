import { type } from "os"

export default {
  name: 'post',
  title: 'comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      
      title: 'Approved',
      name:'approved',
      type:'boolean',
      description: 'comments wont show in the site without approval',
    },
    {
      name: 'email',
      type: 'string',
    
    },
    {
      name: 'comment',
      type: 'text',
      
    },
    {
      name: 'post',
      title: 'reference',
      type: [{type:'post'}],
    },
],
};
