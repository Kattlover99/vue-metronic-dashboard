import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'bounce-in-down', 'bounceInDown')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-bounce-in-down', 'bounceInDown', undefined, true)

export default {single, group}
