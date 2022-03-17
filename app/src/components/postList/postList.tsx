import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./postListStyles";
import Viewer from "./../viewer/viewer"

export interface Props {

}

function PostList(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  const [listItems , setListItems] = useState([<li className={classes.listItem}></li>])
  const [selectedPost , setSelectedPost] = useState({data : "", name: ""})


  useEffect(() => {
    actions.getPosts();
    // eslint-disable-next-line
    //setListItems(state.posts.map((post) =>  <li className={classes.listItem}>{post.name}</li>));
     // eslint-disable-next-line
  }, []);

  const setPost = async (data) => {
    setSelectedPost(data)
  }

  useEffect(() => {
    if(state.posts.length > 0)
    {
      
      setListItems(state.posts.map((post) =>  <li key={post.id.toString()} onClick={(e) => setPost(post)}className={classes.listItem}>{post.name}</li>));
      setSelectedPost(state.posts[0])
    }
     // eslint-disable-next-line
  }, [state.posts]);

  return (
    <div className={classes.BoilerPlate}>
    <ul className={classes.sideList}>{listItems}</ul>
    <Viewer value={selectedPost.data} name={selectedPost.name}></Viewer>
    </div>

  );
}

export default React.memo(PostList);
