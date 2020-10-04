import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './TransactionPanel.css';


const TransactionPanel = (props) => {
  const { data } = props;

  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <div className='SummaryRow'>
            <Typography className={data.type === 'debit' ? 'Debit' : 'Credit'}>
              {data.type.toUpperCase()}
            </Typography>
            <Typography>{`$${data.amount}`}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <div className='Details'>
          <div className='DetailsTitles'>
            <Typography>{`Datetime`}</Typography>
            <Typography>{`ID`}</Typography>
          </div>
          <div className='DetailsValues'>
            <Typography>{data.effectiveDate}</Typography>
            <Typography>{data.id}</Typography>
          </div>
        </div>
        </AccordionDetails>
      </Accordion>
  );
};

export default TransactionPanel;
