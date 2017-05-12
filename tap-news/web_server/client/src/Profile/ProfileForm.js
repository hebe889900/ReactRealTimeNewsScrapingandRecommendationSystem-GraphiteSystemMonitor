import React, {PropTypes} from 'react';
import { Tabs, Tab, MediaBox, Collapsible, CollapsibleItem } from 'react-materialize';

const ProfileForm = ({
  prefer_list,
  ban_list,
  cpu24hours,
  cpu1week,
  cpu1hour,
  cpu10min,
  cpu1min,
  click24hours,
  click1week,
  click1hour,
  click10min,
  click1min,
  qps24hours,
  qps1week,
  qps1hour,
  qps10min,
  qps1min,
  log24hours,
  log1week,
  log1hour,
  log10min,
  log1min,
  img_json
}) => (
  <div className="container">
    <div className="row">
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="QPS" active>
        <h5>Request Per Second:</h5>
        <Collapsible popout>
        <CollapsibleItem header='1 Minute' icon='info_outline' expanded>
          <MediaBox alt='' src={qps1min} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='10 Minutes' icon='info_outline' expanded>
          <MediaBox alt='' src={qps10min} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='1 Hour' icon='info_outline' expanded>
          <MediaBox alt='' src={qps1hour} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='24 Hours' icon='info_outline' expanded>
          <MediaBox alt='' src={qps24hours} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='1 Week' icon='info_outline' expanded>
          <MediaBox alt='' src={qps1week} width='100%'/>
        </CollapsibleItem>
        </Collapsible>
        </Tab>
        <Tab title="User Activities">
        <h5>User Activities:</h5>
        <Collapsible popout>
        <CollapsibleItem header='1 Minute' icon='info_outline' expanded>
          <MediaBox alt='' src={click1min} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='10 Minutes' icon='info_outline' expanded>
          <MediaBox alt='' src={click10min} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='1 Hour' icon='info_outline' expanded>
          <MediaBox alt='' src={click1hour} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='24 Hours' icon='info_outline' expanded>
          <MediaBox alt='' src={click24hours} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='1 Week' icon='info_outline' expanded>
          <MediaBox alt='' src={click1week} width='100%'/>
        </CollapsibleItem>
        </Collapsible>
        </Tab>
        <Tab title="CPU">
        <h5>CPU:</h5>
        <Collapsible popout>
        <CollapsibleItem header='1 Minute' icon='info_outline' expanded>
          <MediaBox alt='' src={cpu1min} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='10 Minutes' icon='info_outline' expanded>
          <MediaBox alt='' src={cpu10min} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='1 Hour' icon='info_outline' expanded>
          <MediaBox alt='' src={cpu1hour} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='24 Hours' icon='info_outline' expanded>
          <MediaBox alt='' src={cpu24hours} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='1 Week' icon='info_outline' expanded>
          <MediaBox alt='' src={cpu1week} width='100%'/>
        </CollapsibleItem>
        </Collapsible>
        </Tab>
        <Tab title="System Log">
        <h5>System Log:</h5>
        <Collapsible popout>
        <CollapsibleItem header='1 Minute' icon='info_outline' expanded>
          <MediaBox alt='' src={log1min} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='10 Minutes' icon='info_outline' expanded>
          <MediaBox alt='' src={log10min} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='1 Hour' icon='info_outline' expanded>
          <MediaBox alt='' src={log1hour} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='24 Hours' icon='info_outline' expanded>
          <MediaBox alt='' src={log24hours} width='100%'/>
        </CollapsibleItem>
        <CollapsibleItem header='1 Week' icon='info_outline' expanded>
          <MediaBox alt='' src={log1week} width='100%'/>
        </CollapsibleItem>
        </Collapsible>
        </Tab>
    </Tabs>
    </div>
    </div>
);

ProfileForm.propTypes = {
  prefer_list: PropTypes.object.isRequired,
  ban_list: PropTypes.object.isRequired,
  cpu24hours: PropTypes.object.isRequired,
  cpu1week: PropTypes.object.isRequired,
  cpu1hour: PropTypes.object.isRequired,
  cpu10min: PropTypes.object.isRequired,
  cpu1min: PropTypes.object.isRequired,
  click24hours: PropTypes.object.isRequired,
  click1week: PropTypes.object.isRequired,
  click1hour: PropTypes.object.isRequired,
  click10min: PropTypes.object.isRequired,
  click1min: PropTypes.object.isRequired,
  qps24hours: PropTypes.object.isRequired,
  qps1week: PropTypes.object.isRequired,
  qps1hour: PropTypes.object.isRequired,
  qps10min: PropTypes.object.isRequired,
  qps1min: PropTypes.object.isRequired,
  log24hours: PropTypes.object.isRequired,
  log1week: PropTypes.object.isRequired,
  log1hour: PropTypes.object.isRequired,
  log10min: PropTypes.object.isRequired,
  log1min: PropTypes.object.isRequired,
  img_json: PropTypes.object.isRequired
};

export default ProfileForm;