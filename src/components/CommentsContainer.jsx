import React from "react";
import Comment from "./Comment";

// N Level comment
const commentsData = [
  {
    name: "Harshit Ranjan",
    comment:
      "This is a great product! I love the packaging and the quality of the product.",
    replies: [
      {
        name: "Seller",
        comment:
          "Thank you so much for your feedback. We are glad to hear that you are enjoying our products.",
        replies: [
          {
            name: "Julius",
            comment: "Thanks for the reply!",
            replies: [
              {
                name: "Caesar",
                comment: "was waiting for the reply too!",
                replies: [
                  {
                    name: "Nishi",
                    comment: " I love the Product .",
                    replies: [
                      {
                        name: "Harshit Ranjan",
                        comment:
                          "This is a great product! I love the packaging and the quality of the product.",
                        replies: [
                          {
                            name: "Harshit Ranjan",
                            comment:
                              "This is a great product! I love the packaging and the quality of the product.",
                            replies: [
                              {
                                name: "Seller",
                                comment:
                                  "Thank you so much for your feedback. We are glad to hear that you are enjoying our products.",
                                replies: [
                                  {
                                    name: "Julius",
                                    comment: "Thanks for the reply!",
                                    replies: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: " Ranjan",
    comment: "This is a great",
    replies: [
        {
            name: "Nishi",
            comment: " I love the Product .",
            replies: [],
          },
    ],
  },

  {
    name: "Harshit Ranjan",
    comment:
      "This is a great product! I love the packaging and the quality of the product.",
    replies: [],
  },
];

const CommentList = ({ commentsData }) => {
  return commentsData.map((comment, idx) => (
    <div key={idx}> 
          <Comment  data={comment} />
          <div className="pl-5 shadow-lg  ">
                <CommentList  commentsData={comment.replies}/>  {/*recursion*/}
          </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[64%]">
      <h1 className="font-bold text-2xl">Comments:</h1>

      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
