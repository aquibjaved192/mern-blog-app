import defaultImage from '../../public/images/default.jpg';
import style from './blogCard.module.scss';

class BlogCard extends React.PureComponent {
 render() {
  return (
   <div className={style.blogCard}>
    <div className={`d-flex align-items-center text-left ${style.author}`}>
     <img height="100px" width="100px" src={defaultImage} alt="default-image" />
     <div>
      <h6 className="m-0">
       Aquib Javed, <small>Software Engineer</small>
      </h6>
      <small>Company Name</small>
      <p className={style.date}>June 20, 2020</p>
     </div>
    </div>
    <div>
     <h6>This is a long and proper blog title</h6>
     <small>
      These are the few words to show in the paragraph section which consist of
      words written in the beginning of the blog...
      <span className={style.continue}>Continue Reading</span>
     </small>
    </div>
   </div>
  );
 }
}

export default BlogCard;
