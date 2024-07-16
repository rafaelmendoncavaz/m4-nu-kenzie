import { FinanceForm } from "./FinanceForm/FinanceForm";
import { Total } from "./Total/Total";
import style from "./style.module.scss";

// eslint-disable-next-line react/prop-types
export function FormSection({ titleValue, ammountValue, typeValue, setTitleValue, setAmmountValue, setTypeValue, insertValue, resumeList }) {

  return (
    <div className={`${style.formSectionContent} flex-col`}>
      <FinanceForm
       titleValue={titleValue}
       ammountValue={ammountValue}
       typeValue={typeValue}
       setTitleValue={setTitleValue}
       setAmmountValue={setAmmountValue}
       setTypeValue={setTypeValue}
       insertValue={insertValue}
       />
      <Total resumeList={resumeList} />
    </div>
  );
}