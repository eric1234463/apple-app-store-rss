import React, { FC } from 'react';

interface IProps {
  color: string
}
const EmptySearchIcon: FC<IProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 38.763 38.763"
      version="1.1"
      viewBox="0 0 38.763 38.763"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M35.469 34.514l-4.422-4.854c-.016-.017-.016-.067 0-.084l4.422-4.858a2.547 2.547 0 00-.171-3.587 2.514 2.514 0 00-1.698-.636 2.66 2.66 0 00-1.145.266V1.565C32.455.703 31.753 0 30.889 0H4.203c-.864 0-1.566.703-1.566 1.565v35.633c0 .862.702 1.565 1.566 1.565h17.27l-.049-.037c.043.002.084.01.128.01.733 0 1.421-.293 1.89-.803l4.135-4.545 4.135 4.543c.48.528 1.165.832 1.879.832.633 0 1.239-.236 1.711-.664a2.547 2.547 0 00.167-3.585zm-16.244 2.684H4.203V1.565h26.686V22.2l-3.313 3.642-4.136-4.544c-.465-.512-1.152-.806-1.888-.806-.644 0-1.248.227-1.7.637a2.543 2.543 0 00-.168 3.588l4.418 4.854c.017.019.018.07 0 .088l-4.42 4.855a2.538 2.538 0 00-.457 2.684zm15.213-.044c-.474.428-1.354.388-1.779-.084l-4.178-4.592a1.211 1.211 0 00-1.809 0l-4.177 4.594a1.271 1.271 0 01-.938.393c-.324 0-.623-.109-.843-.311a1.26 1.26 0 01-.084-1.777l4.42-4.857a1.358 1.358 0 000-1.81l-4.42-4.854a1.26 1.26 0 01.084-1.777c.472-.43 1.353-.387 1.779.083l4.177 4.591c.456.504 1.352.504 1.809.001l4.178-4.591c.429-.471 1.31-.514 1.779-.085a1.263 1.263 0 01.084 1.778l-4.42 4.857a1.358 1.358 0 000 1.809l4.42 4.854a1.263 1.263 0 01-.082 1.778z"
      ></path>
    </svg>
  )
}

export default EmptySearchIcon;
