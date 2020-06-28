import React from 'react';
import { withRouter } from 'next/router';
import style from './createBlog.module.scss';

class CreateBlog extends React.PureComponent {
 render() {
  const { router, userId } = this.props;
  return (
   <div
    onClick={() => router.push(`/create?user=${userId}`)}
    className={style.container}
   >
    <span>&#9998;</span>
   </div>
  );
 }
}

export default withRouter(CreateBlog);
