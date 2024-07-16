import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate";
import { FormSection } from "../../components/FormSection/FormSection";
import { FinanceSection } from "../../components/FinanceSection/FinanceSection";
import style from "./style.module.scss";
import { useState } from "react";


export function FinancialReport() {

  const [titleValue, setTitleValue] = useState("");
  const [ammountValue, setAmmountValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [resumeList, setResumeList] = useState([]);

  const insertValue = (e) => {
    e.preventDefault();

    const data = {
      id: crypto.randomUUID(),
      title: titleValue,
      type: typeValue,
      value: parseFloat(ammountValue),
    };

    setResumeList([data, ...resumeList]);
    setTitleValue("");
    setAmmountValue("");
    setTypeValue("");

  };

  const deleteValue = (valueToRemove) => {

    setResumeList((value) => value.filter(item => item !== valueToRemove))

  }
  
  return (
    <DefaultTemplate>
      <div className={`${style.mainContainer} container`}>
        <FormSection
         titleValue={titleValue}
         ammountValue={ammountValue}
         typeValue={typeValue}
         setTitleValue={setTitleValue}
         setAmmountValue={setAmmountValue}
         setTypeValue={setTypeValue}
         insertValue={insertValue}
         resumeList={resumeList}
        />
        <FinanceSection
        resumeList={resumeList}
        deleteValue={deleteValue}
        />
      </div>
    </DefaultTemplate>
  );
}