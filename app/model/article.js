'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;
  const ArticleSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: {
      type: ObjectId,
      ref: 'User',
    },
    pv: { type: Number, default: 0 },
    comments: [
      { user: { type: ObjectId, ref: 'User' },
        content: String,
      },
    ],
    createAt: { type: Date, default: Date.now },
  });
  const Aritcle = mongoose.model('Article', ArticleSchema);
  return Aritcle;
};
