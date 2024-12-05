import { useCommon } from "../../hooks"
import { Types } from "../../store/const"

export const Parameters = () => {
  const { actionType, columns, value } = useCommon();
  return actionType === Types.Parameters
      && <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {columns.filter(item => item.startsWith(value)).map(item => <div key={item} style={{ cursor: 'pointer' }}>{item}</div>)}
        </div>

}
