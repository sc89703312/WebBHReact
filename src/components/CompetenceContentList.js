/**
 * Created by lenovo on 2016/10/20.
 */
import CompetenceContent from './CompetenceContent';
import React,{PropTypes} from 'react';

function CompetenceContentList ({competenceList, type}) {

  function getList(contentList) {
    var index = 0;
    return contentList.map(
      (object) => {
        return (<CompetenceContent competenceInfo={object} type={type} key={++index}/>)
      }
      )
  }

  return(
      <div>
        {getList(competenceList)}
      </div>
  );
}

CompetenceContentList.propTypes = {
  competenceList: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default CompetenceContentList;
