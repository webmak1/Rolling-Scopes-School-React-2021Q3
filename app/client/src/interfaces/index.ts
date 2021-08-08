export interface IArticle {
  // {
  //   "title": "Operations artificial 1080p Product RAM",
  //   "slug": "operations-artificial-1080p-product-ram-xpi52i",
  //   "body": "calculating Garden navigating Shirt",
  //   "createdAt": "2021-08-08T10:56:21.637Z",
  //   "updatedAt": "2021-08-08T10:56:21.637Z",
  //   "tagList": [],
  //   "description": "unleash back-end",
  //   "author": {
  //       "username": "Leonie.Spencer7",
  //       "bio": null,
  //       "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
  //       "following": false
  //   },
  //   "favorited": false,
  //   "favoritesCount": 0
  // }

  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  author: {
    username: string;
    bio: string;
    image: string;
  };
}

export interface IGET200_Articles {
  articles: IArticle[];
}
