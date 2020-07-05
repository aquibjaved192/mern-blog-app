import defaultImage from '../../public/images/default.jpg';
import style from './blogCard.module.scss';

class BlogCard extends React.PureComponent {
 render() {
  const { blog } = this.props;
  const monthArray = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
  ];
  const date = new Date(blog.postDate);
  const day = date.getDate();
  const month = monthArray[date.getMonth()];
  const year = date.getFullYear();
  return (
   <div className={style.blogCard}>
    <div className={`d-flex align-items-center text-left ${style.author}`}>
     <img height="100px" width="100px" src={defaultImage} alt="default-image" />
     <div>
      <h6 className="m-0">{blog.authorName}</h6>
      <small>{blog.authorProfession}</small>
      <p className={style.date}>
       {month}&nbsp;{day},&nbsp;{year}
      </p>
     </div>
    </div>
    <div>
     <h6>{blog.title}</h6>
     <small>
      {blog.content}...
      <span className={style.continue}>Continue Reading</span>
     </small>
    </div>
   </div>
  );
 }
}

export default BlogCard;
