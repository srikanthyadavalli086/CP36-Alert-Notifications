import {AiFillCheckCircle} from 'react-icons/ai'
import {MdInfo, MdWarning} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1>Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success" />
      <h1 className="success heading">Success</h1>
      <p>You can access all the files in the folder</p>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="error" />
      <h1 className="error heading">Error</h1>
      <p>Sorry, you are not authorized to have access to delete the file</p>
    </Notification>
    <Notification>
      <MdWarning className="warning" />
      <h1 className="warning heading">Warning</h1>
      <p>Viewers of this file can see comments and suggestions</p>
    </Notification>
    <Notification>
      <MdInfo className="info" />
      <h1 className="info heading">Info</h1>
      <p>Anyone on the internet can view these files</p>
    </Notification>
  </div>
)

export default AlertNotifications
