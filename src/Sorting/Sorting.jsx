import React from 'react'
import { Popular } from '../Popular/Popular';
import { New } from '../New/New';

export const Sorting = (Component) => {
    return class Sorting extends React.Component {
        render() {
          const { views } = this.props;
          if (views >= 1000) {
            return (
                <Popular children={<Component {...this.props}/>}/>
            )
          }
          else {
            return (
                <New children={<Component {...this.props}/>}/>
            )
          }
        }
      }
   
}

