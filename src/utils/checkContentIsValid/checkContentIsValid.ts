const checkContentIsValid = (dataField: string): boolean => {
  return !(
    dataField === '&nbsp;' ||
    dataField === '<br />' ||
    dataField === ''
  );
};

export default checkContentIsValid;
