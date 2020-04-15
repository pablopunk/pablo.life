import styled from 'styled-components'
import { themes } from '../utils/themes'
import { StyledPath, StyledRect } from './Styled'

export default ({ width = 100, height = 100 } = {}) => (
  <svg
    width={width}
    height={height}
    version="1.1"
    id="GraphQL_Logo"
    x="0px"
    y="0px"
    viewBox="0 0 400 400"
    enableBackground="new 0 0 400 400"
  >
    <g>
      <g>
        <g>
          <StyledRect
            x="122"
            y="-0.4"
            transform="matrix(-0.866 -0.5 0.5 -0.866 163.3196 363.3136)"
            width="16.6"
            height="320.3"
          />
        </g>
      </g>
      <g>
        <g>
          <StyledRect x="39.8" y="272.2" width="320.3" height="16.6" />
        </g>
      </g>
      <g>
        <g>
          <StyledRect
            x="37.9"
            y="312.2"
            transform="matrix(-0.866 -0.5 0.5 -0.866 83.0693 663.3409)"
            width="185"
            height="16.6"
          />
        </g>
      </g>
      <g>
        <g>
          <StyledRect
            x="177.1"
            y="71.1"
            transform="matrix(-0.866 -0.5 0.5 -0.866 463.3409 283.0693)"
            width="185"
            height="16.6"
          />
        </g>
      </g>
      <g>
        <g>
          <StyledRect
            x="122.1"
            y="-13"
            transform="matrix(-0.5 -0.866 0.866 -0.5 126.7903 232.1221)"
            width="16.6"
            height="185"
          />
        </g>
      </g>
      <g>
        <g>
          <StyledRect
            x="109.6"
            y="151.6"
            transform="matrix(-0.5 -0.866 0.866 -0.5 266.0828 473.3766)"
            width="320.3"
            height="16.6"
          />
        </g>
      </g>
      <g>
        <g>
          <StyledRect x="52.5" y="107.5" width="16.6" height="185" />
        </g>
      </g>
      <g>
        <g>
          <StyledRect x="330.9" y="107.5" width="16.6" height="185" />
        </g>
      </g>
      <g>
        <g>
          <StyledRect
            x="262.4"
            y="240.1"
            transform="matrix(-0.5 -0.866 0.866 -0.5 126.7953 714.2875)"
            width="14.5"
            height="160.9"
          />
        </g>
      </g>
      <StyledPath
        d="M369.5,297.9c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8
		C373.5,259.9,379.2,281.2,369.5,297.9"
      />
      <StyledPath
        d="M90.9,137c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8
		C94.8,99,100.5,120.3,90.9,137"
      />
      <StyledPath
        d="M30.5,297.9c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7
		C61.4,320.3,40.1,314.6,30.5,297.9"
      />
      <StyledPath
        d="M309.1,137c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7
		C340.1,159.4,318.7,153.7,309.1,137"
      />
      <StyledPath
        d="M200,395.8c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9
		C234.9,380.1,219.3,395.8,200,395.8"
      />
      <StyledPath
        d="M200,74c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9
		C234.9,58.4,219.3,74,200,74"
      />
    </g>
  </svg>
)
