import React, { Fragment, useEffect, useState } from "react";
//import { CgMouse } from "react-icons/cg"
import "./Home.css"

import Swal from 'sweetalert2'

import Product from "../../pages/Products/Product";
import Banner from "../../components/banner/Banner";
const Home = () => {

  // const {keyword} = useParams();
  const products = [{
    name: "Matrix Tennis necklace1",
    description: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    price: 500,
    category: "jwelry",
    numofReviews: 4,
    ratings: 3.6,
    images: [{
      public_id: "img1",
      url: "https://i.ibb.co.com/10bzw9k/image.png"
    },
    {
      public_id: "img2",
      url: "https://i.ibb.co.com/wWchmCL/image.png"
    },
    {
      public_id: "img3",
      url: "https://i.ibb.co.com/wLhZ16V/image.png"
    },
    {
      public_id: "img4",
      url: "https://i.ibb.co.com/C7qtmDs/image.png"
    }],
    reviews: [
      {
        name: "Nowshin",
        rating: 4.5,
        comment: " this is a comment"
      },
      {
        name: "Nawar",
        rating: 3,
        comment: " this is 2nd comment"
      },
      {
        name: "Nafisa",
        rating: 2,
        comment: " this is 3nd comment"
      },
      {
        name: "Nishat",
        rating: 5,
        comment: " this is 4th comment"
      }
    ]
  },
  {
    name: "Matrix Tennis necklace1",
    description: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    price: 500,
    category: "jwelry",
    numofReviews: 4,
    ratings: 3.6,
    images: [{
      public_id: "img1",
      url: "https://i.ibb.co.com/10bzw9k/image.png"
    },
    {
      public_id: "img2",
      url: "https://i.ibb.co.com/wWchmCL/image.png"
    },
    {
      public_id: "img3",
      url: "https://i.ibb.co.com/wLhZ16V/image.png"
    },
    {
      public_id: "img4",
      url: "https://i.ibb.co.com/C7qtmDs/image.png"
    }],
    reviews: [
      {
        name: "Nowshin",
        rating: 4.5,
        comment: " this is a comment"
      },
      {
        name: "Nawar",
        rating: 3,
        comment: " this is 2nd comment"
      },
      {
        name: "Nafisa",
        rating: 2,
        comment: " this is 3nd comment"
      },
      {
        name: "Nishat",
        rating: 5,
        comment: " this is 4th comment"
      }
    ]
  },
  {
    name: "Matrix Tennis necklace1",
    description: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    price: 500,
    category: "jwelry",
    numofReviews: 4,
    ratings: 3.6,
    images: [{
      public_id: "img1",
      url: "https://i.ibb.co.com/10bzw9k/image.png"
    },
    {
      public_id: "img2",
      url: "https://i.ibb.co.com/wWchmCL/image.png"
    },
    {
      public_id: "img3",
      url: "https://i.ibb.co.com/wLhZ16V/image.png"
    },
    {
      public_id: "img4",
      url: "https://i.ibb.co.com/C7qtmDs/image.png"
    }],
    reviews: [
      {
        name: "Nowshin",
        rating: 4.5,
        comment: " this is a comment"
      },
      {
        name: "Nawar",
        rating: 3,
        comment: " this is 2nd comment"
      },
      {
        name: "Nafisa",
        rating: 2,
        comment: " this is 3nd comment"
      },
      {
        name: "Nishat",
        rating: 5,
        comment: " this is 4th comment"
      }
    ]
  },
  {
    name: "Matrix Tennis necklace1",
    description: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    price: 500,
    category: "jwelry",
    numofReviews: 4,
    ratings: 3.6,
    images: [{
      public_id: "img1",
      url: "https://i.ibb.co.com/10bzw9k/image.png"
    },
    {
      public_id: "img2",
      url: "https://i.ibb.co.com/wWchmCL/image.png"
    },
    {
      public_id: "img3",
      url: "https://i.ibb.co.com/wLhZ16V/image.png"
    },
    {
      public_id: "img4",
      url: "https://i.ibb.co.com/C7qtmDs/image.png"
    }],
    reviews: [
      {
        name: "Nowshin",
        rating: 4.5,
        comment: " this is a comment"
      },
      {
        name: "Nawar",
        rating: 3,
        comment: " this is 2nd comment"
      },
      {
        name: "Nafisa",
        rating: 2,
        comment: " this is 3nd comment"
      },
      {
        name: "Nishat",
        rating: 5,
        comment: " this is 4th comment"
      }
    ]
  },
  {
    name: "Matrix Tennis necklace1",
    description: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    price: 500,
    category: "jwelry",
    numofReviews: 4,
    ratings: 3.6,
    images: [{
      public_id: "img1",
      url: "https://i.ibb.co.com/10bzw9k/image.png"
    },
    {
      public_id: "img2",
      url: "https://i.ibb.co.com/wWchmCL/image.png"
    },
    {
      public_id: "img3",
      url: "https://i.ibb.co.com/wLhZ16V/image.png"
    },
    {
      public_id: "img4",
      url: "https://i.ibb.co.com/C7qtmDs/image.png"
    }],
    reviews: [
      {
        name: "Nowshin",
        rating: 4.5,
        comment: " this is a comment"
      },
      {
        name: "Nawar",
        rating: 3,
        comment: " this is 2nd comment"
      },
      {
        name: "Nafisa",
        rating: 2,
        comment: " this is 3nd comment"
      },
      {
        name: "Nishat",
        rating: 5,
        comment: " this is 4th comment"
      }
    ]
  },
  {
    name: "Matrix Tennis necklace1",
    description: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    price: 500,
    category: "jwelry",
    numofReviews: 4,
    ratings: 3.6,
    images: [{
      public_id: "img1",
      url: "https://i.ibb.co.com/10bzw9k/image.png"
    },
    {
      public_id: "img2",
      url: "https://i.ibb.co.com/wWchmCL/image.png"
    },
    {
      public_id: "img3",
      url: "https://i.ibb.co.com/wLhZ16V/image.png"
    },
    {
      public_id: "img4",
      url: "https://i.ibb.co.com/C7qtmDs/image.png"
    }],
    reviews: [
      {
        name: "Nowshin",
        rating: 4.5,
        comment: " this is a comment"
      },
      {
        name: "Nawar",
        rating: 3,
        comment: " this is 2nd comment"
      },
      {
        name: "Nafisa",
        rating: 2,
        comment: " this is 3nd comment"
      },
      {
        name: "Nishat",
        rating: 5,
        comment: " this is 4th comment"
      }
    ]
  },
  {
    name: "Matrix Tennis necklace1",
    description: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    price: 500,
    category: "jwelry",
    numofReviews: 4,
    ratings: 3.6,
    images: [{
      public_id: "img1",
      url: "https://i.ibb.co.com/10bzw9k/image.png"
    },
    {
      public_id: "img2",
      url: "https://i.ibb.co.com/wWchmCL/image.png"
    },
    {
      public_id: "img3",
      url: "https://i.ibb.co.com/wLhZ16V/image.png"
    },
    {
      public_id: "img4",
      url: "https://i.ibb.co.com/C7qtmDs/image.png"
    }],
    reviews: [
      {
        name: "Nowshin",
        rating: 4.5,
        comment: " this is a comment"
      },
      {
        name: "Nawar",
        rating: 3,
        comment: " this is 2nd comment"
      },
      {
        name: "Nafisa",
        rating: 2,
        comment: " this is 3nd comment"
      },
      {
        name: "Nishat",
        rating: 5,
        comment: " this is 4th comment"
      }
    ]
  }];

  return (
    <Fragment>
      <div className="bg-white">
        <Banner></Banner>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-center">
            <h2 className=" mb-4 p-4 w-fit border-b-2 self-center">Explore Our Products</h2>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products && products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>

        </div>
      </div>
    </Fragment>
  )
}
export default Home;