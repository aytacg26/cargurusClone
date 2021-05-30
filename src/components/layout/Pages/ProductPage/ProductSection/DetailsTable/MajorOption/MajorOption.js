import InfoTooltip from '../../../../../../ui/InfoTooltip/InfoTooltip';
import classes from './MajorOption.module.scss';

const MajorOption = ({ label, info, isExist, toolTipSide }) => {
  const icon = `${classes.CheckMark} ${isExist ? classes.Exist : ''}`;

  return (
    <div className={classes.MajorOption}>
      <span className={icon}></span>
      <label>{label}</label>
      <InfoTooltip info={info} toolTipSide={toolTipSide} />
    </div>
  );
};

export default MajorOption;
