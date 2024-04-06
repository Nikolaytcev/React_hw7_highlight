import { Sorting } from '../Sorting/Sorting';
import { Video } from '../Video/Video';
import { Article } from '../Article/Article';
import { nanoid } from 'nanoid';

export const SortVideo = Sorting(Video);
export const SortArticle = Sorting(Article);

export const List = (props) => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    < SortVideo {...item} key={nanoid()}/>
                );

            case 'article':
                return (
                    <SortArticle {...item} key={nanoid()}/>
                );
        }
    });
};
