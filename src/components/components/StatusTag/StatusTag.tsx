import './StatusTag.scss';

interface StatusTagProps {
  isSaved: boolean;
}

function StatusTag({ isSaved = false }: StatusTagProps) {
  const statusText = isSaved ? "SAVED" : "UNSAVED"
  return (<span className='a-status-tag'>
    {statusText}
  </span>)
}

export default StatusTag;
