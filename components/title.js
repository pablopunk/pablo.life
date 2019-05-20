import React from 'react'

export default class extends React.Component {
  componentDidMount() {
    // const paths = document.querySelectorAll('#titleSvg path')
    // for (let i = 0; i < paths.length; i++) {
    //   const length = paths[i].getTotalLength()
    //   console.log(i + 2, length)
    // }
  }
  render() {
    return (
      <div>
        <svg
          id="titleSvg"
          width="250"
          viewBox="0 0 332 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="-0.0616302"
            y="0.695999"
            width="332"
            height="79"
            fill="black"
          >
            <rect
              fill="white"
              x="-0.0616302"
              y="0.695999"
              width="332"
              height="79"
            />
            <path d="M6.25837 76.48C5.55437 76.48 4.97837 76.192 4.53037 75.616C4.14637 74.976 3.95437 74.208 3.95437 73.312L4.14637 57.184C4.33837 49.376 4.43437 43.328 4.43437 39.04C4.43437 24.128 3.60237 12.704 1.93837 4.768C2.89837 3.296 4.11437 2.56 5.58637 2.56C7.95437 2.56 10.0984 3.104 12.0184 4.192C14.0024 5.216 15.6344 6.624 16.9144 8.416C19.4104 12.128 20.6584 16.288 20.6584 20.896C20.6584 25.696 19.6344 29.984 17.5864 33.76C15.5384 37.536 12.5624 40.48 8.65837 42.592L8.85037 52.288L9.04237 57.376C9.10637 58.464 9.13837 60.032 9.13837 62.08C9.33037 66.368 9.42637 69.856 9.42637 72.544C9.42637 73.76 9.17037 74.72 8.65837 75.424C8.14637 76.128 7.34637 76.48 6.25837 76.48ZM8.46637 37.984C10.9624 35.616 12.7864 33.152 13.9384 30.592C15.1544 27.968 15.7624 25.024 15.7624 21.76V21.664C15.7624 20.192 15.6024 18.336 15.2824 16.096C15.0904 15.328 14.7384 14.56 14.2264 13.792C13.7144 13.024 13.4264 12.576 13.3624 12.448C12.9144 11.808 11.7304 10.816 9.81037 9.472L7.31437 7.648C7.31437 10.912 7.50637 15.968 7.89037 22.816L8.46637 37.984Z" />
            <path d="M45.8149 76C44.7909 76 44.0229 75.808 43.5109 75.424C43.0629 75.04 42.8389 74.4 42.8389 73.504V60.928C42.0069 60.352 40.4389 59.84 38.1349 59.392C35.8309 58.944 33.6549 58.656 31.6069 58.528C30.9029 59.872 30.3909 61.504 30.0709 63.424L29.6869 65.344C29.6229 65.792 29.4309 66.784 29.1109 68.32C28.7909 69.856 28.4389 71.2 28.0549 72.352C27.6709 73.44 27.2869 74.304 26.9029 74.944C24.4709 74.944 23.0629 74.304 22.6789 73.024C23.3829 72 24.1829 68.992 25.0789 64L28.2469 46.432C29.6549 38.112 30.9349 31.008 32.0869 25.12C33.3029 19.232 34.5829 14.304 35.9269 10.336C37.3989 5.92 38.8069 3.712 40.1509 3.712C41.4949 3.712 42.5189 3.968 43.2229 4.48C43.2229 7.04 43.8309 13.216 45.0469 23.008C46.3269 32.608 46.9669 39.168 46.9669 42.688C46.9669 46.08 47.3189 50.944 48.0229 57.28C48.6629 63.744 48.9829 68.896 48.9829 72.736C48.9829 74.912 47.9269 76 45.8149 76ZM40.8229 55.36C41.3349 55.36 41.9749 55.264 42.7429 55.072C42.5509 52.256 42.2309 48.768 41.7829 44.608C40.3109 30.144 39.5749 21.28 39.5749 18.016V17.248C38.9349 17.888 38.0389 20.8 36.8869 25.984C35.7989 31.104 34.7749 36.608 33.8149 42.496C32.8549 48.384 32.3429 52.288 32.2789 54.208C34.9669 54.976 37.8149 55.36 40.8229 55.36Z" />
            <path d="M64.8814 76.768C61.9374 76.768 60.4654 75.968 60.4654 74.368L60.6574 62.56L60.8494 50.752C60.8494 46.464 60.7534 39.968 60.5614 31.264C60.3694 22.624 60.2734 16.128 60.2734 11.776V11.2C60.2734 9.536 60.4334 8 60.7534 6.592C61.1374 4.864 62.1614 4 63.8254 4C68.3054 4 71.8574 5.44 74.4814 8.32C77.1054 11.2 78.4174 15.008 78.4174 19.744C78.4174 22.624 77.6494 25.632 76.1134 28.768C74.5774 31.904 72.7534 34.24 70.6414 35.776C74.3534 38.272 77.0734 41.504 78.8014 45.472C80.5934 49.376 81.4894 53.696 81.4894 58.432C81.4894 60.672 80.7214 63.456 79.1854 66.784C77.3294 70.752 74.8014 73.6 71.6014 75.328C69.6814 76.288 67.5694 76.768 65.2654 76.768H64.8814ZM65.8414 34.336C67.5054 33.952 68.9134 32.576 70.0654 30.208C71.0254 28.416 71.9214 26.24 72.7534 23.68C72.9454 22.976 73.2654 22.08 73.7134 20.992V17.632C73.7134 15.712 73.0094 13.856 71.6014 12.064C70.1934 10.272 68.5934 9.376 66.8014 9.376C65.9054 9.376 65.4574 10.368 65.4574 12.352C65.4574 16.576 65.5214 20.352 65.6494 23.68L65.8414 34.336ZM66.2254 71.776C69.3614 71.328 71.8574 69.888 73.7134 67.456C75.5694 65.024 76.4974 62.112 76.4974 58.72C76.4974 55.776 76.2414 53.088 75.7294 50.656C75.2814 48.16 74.6734 46.272 73.9054 44.992C73.2014 43.776 72.4974 42.752 71.7934 41.92C71.0894 41.088 70.4814 40.544 69.9694 40.288L69.2014 40H65.7454C66.0654 47.36 66.2254 57.952 66.2254 71.776Z" />
            <path d="M94.9729 77.056C94.1409 77.056 93.3729 76.736 92.6689 76.096C92.0289 75.52 91.7089 74.816 91.7089 73.984C91.7089 73.408 91.8369 72.704 92.0929 71.872C92.2849 70.976 92.3809 70.304 92.3809 69.856C92.3809 64.16 92.0609 53.216 91.4209 37.024C90.7809 23.2 90.4609 12.288 90.4609 4.288C90.4609 3.712 90.6849 3.264 91.1329 2.944C91.5809 2.56 92.1249 2.368 92.7649 2.368C93.5329 2.368 94.2049 2.656 94.7809 3.232C95.3569 3.744 95.6449 4.384 95.6449 5.152C95.6449 8.992 95.8369 14.752 96.2209 22.432C96.5409 30.944 96.7009 36.704 96.7009 39.712L96.7969 40.864V42.016V42.688V43.168C96.9889 48.736 97.0849 57.056 97.0849 68.128V70.624H104.477C105.821 71.584 106.493 72.544 106.493 73.504C106.493 74.208 106.237 74.848 105.725 75.424C105.277 75.936 104.733 76.192 104.093 76.192C103.901 76.192 103.549 76.128 103.037 76L102.653 75.904C102.269 75.968 101.661 76 100.829 76H99.1969C98.7489 75.936 98.2369 75.904 97.6609 75.904C97.0209 76.672 96.1249 77.056 94.9729 77.056Z" />
            <path d="M127.133 78.688C125.405 78.688 123.837 78.112 122.429 76.96C121.021 75.808 119.805 74.24 118.781 72.256C116.925 68.8 115.549 64.064 114.653 58.048C114.013 53.888 113.533 49.088 113.213 43.648L113.117 38.56V33.376C113.053 31.712 113.021 29.696 113.021 27.328C113.021 23.488 113.181 20.096 113.501 17.152C113.757 14.08 114.397 11.04 115.421 8.032C116.445 5.408 117.917 3.552 119.837 2.464C120.989 1.952 122.141 1.696 123.293 1.696C126.685 1.696 129.373 3.04 131.357 5.728C133.533 8.736 134.973 12.096 135.677 15.808C136.701 20.288 137.277 24.576 137.405 28.672C137.661 33.216 137.789 37.504 137.789 41.536V47.008C137.789 48.096 137.629 50.144 137.309 53.152C137.053 55.52 136.925 57.536 136.925 59.2V59.584C136.541 61.376 136.349 63.488 136.349 65.92C136.349 67.712 135.965 69.568 135.197 71.488C134.429 73.408 133.341 75.04 131.933 76.384C130.525 77.92 128.925 78.688 127.133 78.688ZM127.325 73.408C128.605 73.408 129.693 72.224 130.589 69.856C131.357 67.744 131.901 65.184 132.221 62.176C132.605 59.104 132.925 55.648 133.181 51.808C133.309 50.144 133.373 48 133.373 45.376L133.277 36.544C133.149 33.088 132.765 28.768 132.125 23.584C131.613 19.168 130.653 15.264 129.245 11.872C128.605 10.272 127.805 9.024 126.845 8.128C125.885 7.232 124.861 6.784 123.773 6.784C122.173 6.784 120.989 8.032 120.221 10.528C119.261 13.152 118.621 16.032 118.301 19.168C117.917 22.56 117.693 25.792 117.629 28.864L117.533 32.032C117.469 32.928 117.437 34.144 117.437 35.68V36.064C117.437 40.352 117.885 45.632 118.781 51.904C119.805 60.416 121.309 66.464 123.293 70.048C124.573 72.288 125.917 73.408 127.325 73.408Z" />
            <path d="M177.253 77.632C176.357 77.632 175.621 77.28 175.045 76.576C173.381 69.664 171.109 57.152 168.229 39.04C165.029 19.712 163.077 8.224 162.373 4.576C162.629 3.36 163.493 2.752 164.965 2.752C166.053 2.752 167.397 6.848 168.997 15.04C170.661 23.296 172.293 32.64 173.893 43.072L176.485 60.064C177.509 52.384 178.309 46.624 178.885 42.784C180.101 33.952 180.997 26.656 181.573 20.896C182.149 15.072 182.437 9.568 182.437 4.384C183.397 3.104 184.549 2.464 185.893 2.464L187.909 3.52L186.469 16.48C186.149 20.448 185.349 27.648 184.069 38.08L183.205 44.416C182.501 50.048 181.797 55.36 181.093 60.352C180.133 67.584 179.237 72.608 178.405 75.424C178.021 76.896 177.637 77.632 177.253 77.632Z" />
            <path d="M214.94 76C213.916 76 213.148 75.808 212.636 75.424C212.188 75.04 211.964 74.4 211.964 73.504V60.928C211.132 60.352 209.564 59.84 207.26 59.392C204.956 58.944 202.78 58.656 200.732 58.528C200.028 59.872 199.516 61.504 199.196 63.424L198.812 65.344C198.748 65.792 198.556 66.784 198.236 68.32C197.916 69.856 197.564 71.2 197.18 72.352C196.796 73.44 196.412 74.304 196.028 74.944C193.596 74.944 192.188 74.304 191.804 73.024C192.508 72 193.308 68.992 194.204 64L197.372 46.432C198.78 38.112 200.06 31.008 201.212 25.12C202.428 19.232 203.708 14.304 205.052 10.336C206.524 5.92 207.932 3.712 209.276 3.712C210.62 3.712 211.644 3.968 212.348 4.48C212.348 7.04 212.956 13.216 214.172 23.008C215.452 32.608 216.092 39.168 216.092 42.688C216.092 46.08 216.444 50.944 217.148 57.28C217.788 63.744 218.108 68.896 218.108 72.736C218.108 74.912 217.052 76 214.94 76ZM209.948 55.36C210.46 55.36 211.1 55.264 211.868 55.072C211.676 52.256 211.356 48.768 210.908 44.608C209.436 30.144 208.7 21.28 208.7 18.016V17.248C208.06 17.888 207.164 20.8 206.012 25.984C204.924 31.104 203.9 36.608 202.94 42.496C201.98 48.384 201.468 52.288 201.404 54.208C204.092 54.976 206.94 55.36 209.948 55.36Z" />
            <path d="M247.254 76.96C246.038 76.96 244.854 76.096 243.702 74.368V74.08C243.51 70.688 242.934 66.912 241.974 62.752C241.014 58.592 239.606 53.568 237.75 47.68C236.342 43.264 235.158 39.296 234.198 35.776V73.6C234.198 74.624 234.006 75.392 233.622 75.904C233.302 76.352 232.63 76.576 231.606 76.576C230.838 76.576 230.23 76.352 229.782 75.904C229.334 75.392 229.11 74.752 229.11 73.984V73.216L229.302 44.992C229.43 36.672 229.494 27.296 229.494 16.864V5.056C229.494 4.288 229.654 3.776 229.974 3.52C230.294 3.2 230.966 3.04 231.99 3.04C233.59 3.04 235.062 3.36 236.406 4C237.75 4.576 238.902 5.408 239.862 6.496C241.846 8.736 243.126 11.424 243.702 14.56C243.958 15.84 244.086 17.312 244.086 18.976C244.086 19.936 243.99 20.992 243.798 22.144C243.67 23.296 243.574 24.032 243.51 24.352C243.382 24.992 243.094 25.952 242.646 27.232C242.198 28.512 241.91 29.344 241.782 29.728L240.63 32.416L239.67 34.912C239.734 37.216 240.118 40.128 240.822 43.648C241.59 47.168 242.422 50.432 243.318 53.44C243.958 55.552 245.11 59.072 246.774 64L249.558 72.448V72.64C249.558 73.728 249.462 74.656 249.27 75.424C249.078 76.448 248.406 76.96 247.254 76.96ZM234.006 31.456C234.902 30.56 235.99 29.312 237.27 27.712L238.71 19.456C238.774 19.136 238.806 18.688 238.806 18.112C238.806 16.256 238.454 14.112 237.75 11.68C237.366 10.528 236.854 9.568 236.214 8.8C235.638 7.968 235.03 7.52 234.39 7.456L234.198 17.056C234.006 21.344 233.91 24.672 233.91 27.04C233.91 29.28 233.942 30.752 234.006 31.456Z" />
            <path d="M262.716 76.576C261.5 76.576 260.444 76.416 259.548 76.096C258.46 75.776 257.916 74.88 257.916 73.408V17.632C257.916 16.544 257.724 14.912 257.34 12.736C256.892 10.752 256.668 9.12 256.668 7.84V7.552C257.756 5.76 258.556 4.608 259.068 4.096C259.964 4.096 261.148 3.968 262.62 3.712C263.964 3.456 265.148 3.328 266.172 3.328C267.196 3.328 268.188 3.648 269.148 4.288C270.108 4.864 270.588 5.568 270.588 6.4C270.588 8.32 269.116 9.28 266.172 9.28H264.828C264.444 9.216 263.996 9.184 263.484 9.184C262.908 9.184 262.556 9.216 262.428 9.28C262.428 11.456 262.556 14.08 262.812 17.152L263.004 19.84L263.196 25.12C263.196 26.336 263.1 28.192 262.908 30.688L262.716 36.064L264.06 35.776C265.34 35.392 266.396 35.2 267.228 35.2C267.932 35.2 268.572 35.488 269.148 36.064C269.724 36.576 270.012 37.184 270.012 37.888C270.012 38.656 269.756 39.36 269.244 40C268.796 40.576 268.22 40.864 267.516 40.864L266.364 40.768H265.116C264.156 40.768 263.484 40.992 263.1 41.44V71.104L268.476 70.816C272.124 70.816 273.948 71.648 273.948 73.312V73.696C273.564 74.464 272.86 75.104 271.836 75.616C270.812 76.064 269.82 76.352 268.86 76.48L265.692 76.576H262.716Z" />
            <path d="M288.379 77.056C287.547 77.056 286.779 76.736 286.075 76.096C285.435 75.52 285.115 74.816 285.115 73.984C285.115 73.408 285.243 72.704 285.499 71.872C285.691 70.976 285.787 70.304 285.787 69.856C285.787 64.16 285.467 53.216 284.827 37.024C284.187 23.2 283.867 12.288 283.867 4.288C283.867 3.712 284.091 3.264 284.539 2.944C284.987 2.56 285.531 2.368 286.171 2.368C286.939 2.368 287.611 2.656 288.187 3.232C288.763 3.744 289.051 4.384 289.051 5.152C289.051 8.992 289.243 14.752 289.627 22.432C289.947 30.944 290.107 36.704 290.107 39.712L290.203 40.864V42.016V42.688V43.168C290.395 48.736 290.491 57.056 290.491 68.128V70.624H297.883C299.227 71.584 299.899 72.544 299.899 73.504C299.899 74.208 299.643 74.848 299.131 75.424C298.683 75.936 298.139 76.192 297.499 76.192C297.307 76.192 296.955 76.128 296.443 76L296.059 75.904C295.675 75.968 295.067 76 294.235 76H292.603C292.155 75.936 291.643 75.904 291.067 75.904C290.427 76.672 289.531 77.056 288.379 77.056Z" />
            <path d="M326.971 76C325.947 76 325.179 75.808 324.667 75.424C324.219 75.04 323.995 74.4 323.995 73.504V60.928C323.163 60.352 321.595 59.84 319.291 59.392C316.987 58.944 314.811 58.656 312.763 58.528C312.059 59.872 311.547 61.504 311.227 63.424L310.843 65.344C310.779 65.792 310.587 66.784 310.267 68.32C309.947 69.856 309.595 71.2 309.211 72.352C308.827 73.44 308.443 74.304 308.059 74.944C305.627 74.944 304.219 74.304 303.835 73.024C304.539 72 305.339 68.992 306.235 64L309.403 46.432C310.811 38.112 312.091 31.008 313.243 25.12C314.459 19.232 315.739 14.304 317.083 10.336C318.555 5.92 319.963 3.712 321.307 3.712C322.651 3.712 323.675 3.968 324.379 4.48C324.379 7.04 324.987 13.216 326.203 23.008C327.483 32.608 328.123 39.168 328.123 42.688C328.123 46.08 328.475 50.944 329.179 57.28C329.819 63.744 330.139 68.896 330.139 72.736C330.139 74.912 329.083 76 326.971 76ZM321.979 55.36C322.491 55.36 323.131 55.264 323.899 55.072C323.707 52.256 323.387 48.768 322.939 44.608C321.467 30.144 320.731 21.28 320.731 18.016V17.248C320.091 17.888 319.195 20.8 318.043 25.984C316.955 31.104 315.931 36.608 314.971 42.496C314.011 48.384 313.499 52.288 313.435 54.208C316.123 54.976 318.971 55.36 321.979 55.36Z" />
          </mask>
          <path
            d="M6.25837 76.48C5.55437 76.48 4.97837 76.192 4.53037 75.616C4.14637 74.976 3.95437 74.208 3.95437 73.312L4.14637 57.184C4.33837 49.376 4.43437 43.328 4.43437 39.04C4.43437 24.128 3.60237 12.704 1.93837 4.768C2.89837 3.296 4.11437 2.56 5.58637 2.56C7.95437 2.56 10.0984 3.104 12.0184 4.192C14.0024 5.216 15.6344 6.624 16.9144 8.416C19.4104 12.128 20.6584 16.288 20.6584 20.896C20.6584 25.696 19.6344 29.984 17.5864 33.76C15.5384 37.536 12.5624 40.48 8.65837 42.592L8.85037 52.288L9.04237 57.376C9.10637 58.464 9.13837 60.032 9.13837 62.08C9.33037 66.368 9.42637 69.856 9.42637 72.544C9.42637 73.76 9.17037 74.72 8.65837 75.424C8.14637 76.128 7.34637 76.48 6.25837 76.48ZM8.46637 37.984C10.9624 35.616 12.7864 33.152 13.9384 30.592C15.1544 27.968 15.7624 25.024 15.7624 21.76V21.664C15.7624 20.192 15.6024 18.336 15.2824 16.096C15.0904 15.328 14.7384 14.56 14.2264 13.792C13.7144 13.024 13.4264 12.576 13.3624 12.448C12.9144 11.808 11.7304 10.816 9.81037 9.472L7.31437 7.648C7.31437 10.912 7.50637 15.968 7.89037 22.816L8.46637 37.984Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M45.8149 76C44.7909 76 44.0229 75.808 43.5109 75.424C43.0629 75.04 42.8389 74.4 42.8389 73.504V60.928C42.0069 60.352 40.4389 59.84 38.1349 59.392C35.8309 58.944 33.6549 58.656 31.6069 58.528C30.9029 59.872 30.3909 61.504 30.0709 63.424L29.6869 65.344C29.6229 65.792 29.4309 66.784 29.1109 68.32C28.7909 69.856 28.4389 71.2 28.0549 72.352C27.6709 73.44 27.2869 74.304 26.9029 74.944C24.4709 74.944 23.0629 74.304 22.6789 73.024C23.3829 72 24.1829 68.992 25.0789 64L28.2469 46.432C29.6549 38.112 30.9349 31.008 32.0869 25.12C33.3029 19.232 34.5829 14.304 35.9269 10.336C37.3989 5.92 38.8069 3.712 40.1509 3.712C41.4949 3.712 42.5189 3.968 43.2229 4.48C43.2229 7.04 43.8309 13.216 45.0469 23.008C46.3269 32.608 46.9669 39.168 46.9669 42.688C46.9669 46.08 47.3189 50.944 48.0229 57.28C48.6629 63.744 48.9829 68.896 48.9829 72.736C48.9829 74.912 47.9269 76 45.8149 76ZM40.8229 55.36C41.3349 55.36 41.9749 55.264 42.7429 55.072C42.5509 52.256 42.2309 48.768 41.7829 44.608C40.3109 30.144 39.5749 21.28 39.5749 18.016V17.248C38.9349 17.888 38.0389 20.8 36.8869 25.984C35.7989 31.104 34.7749 36.608 33.8149 42.496C32.8549 48.384 32.3429 52.288 32.2789 54.208C34.9669 54.976 37.8149 55.36 40.8229 55.36Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M64.8814 76.768C61.9374 76.768 60.4654 75.968 60.4654 74.368L60.6574 62.56L60.8494 50.752C60.8494 46.464 60.7534 39.968 60.5614 31.264C60.3694 22.624 60.2734 16.128 60.2734 11.776V11.2C60.2734 9.536 60.4334 8 60.7534 6.592C61.1374 4.864 62.1614 4 63.8254 4C68.3054 4 71.8574 5.44 74.4814 8.32C77.1054 11.2 78.4174 15.008 78.4174 19.744C78.4174 22.624 77.6494 25.632 76.1134 28.768C74.5774 31.904 72.7534 34.24 70.6414 35.776C74.3534 38.272 77.0734 41.504 78.8014 45.472C80.5934 49.376 81.4894 53.696 81.4894 58.432C81.4894 60.672 80.7214 63.456 79.1854 66.784C77.3294 70.752 74.8014 73.6 71.6014 75.328C69.6814 76.288 67.5694 76.768 65.2654 76.768H64.8814ZM65.8414 34.336C67.5054 33.952 68.9134 32.576 70.0654 30.208C71.0254 28.416 71.9214 26.24 72.7534 23.68C72.9454 22.976 73.2654 22.08 73.7134 20.992V17.632C73.7134 15.712 73.0094 13.856 71.6014 12.064C70.1934 10.272 68.5934 9.376 66.8014 9.376C65.9054 9.376 65.4574 10.368 65.4574 12.352C65.4574 16.576 65.5214 20.352 65.6494 23.68L65.8414 34.336ZM66.2254 71.776C69.3614 71.328 71.8574 69.888 73.7134 67.456C75.5694 65.024 76.4974 62.112 76.4974 58.72C76.4974 55.776 76.2414 53.088 75.7294 50.656C75.2814 48.16 74.6734 46.272 73.9054 44.992C73.2014 43.776 72.4974 42.752 71.7934 41.92C71.0894 41.088 70.4814 40.544 69.9694 40.288L69.2014 40H65.7454C66.0654 47.36 66.2254 57.952 66.2254 71.776Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M94.9729 77.056C94.1409 77.056 93.3729 76.736 92.6689 76.096C92.0289 75.52 91.7089 74.816 91.7089 73.984C91.7089 73.408 91.8369 72.704 92.0929 71.872C92.2849 70.976 92.3809 70.304 92.3809 69.856C92.3809 64.16 92.0609 53.216 91.4209 37.024C90.7809 23.2 90.4609 12.288 90.4609 4.288C90.4609 3.712 90.6849 3.264 91.1329 2.944C91.5809 2.56 92.1249 2.368 92.7649 2.368C93.5329 2.368 94.2049 2.656 94.7809 3.232C95.3569 3.744 95.6449 4.384 95.6449 5.152C95.6449 8.992 95.8369 14.752 96.2209 22.432C96.5409 30.944 96.7009 36.704 96.7009 39.712L96.7969 40.864V42.016V42.688V43.168C96.9889 48.736 97.0849 57.056 97.0849 68.128V70.624H104.477C105.821 71.584 106.493 72.544 106.493 73.504C106.493 74.208 106.237 74.848 105.725 75.424C105.277 75.936 104.733 76.192 104.093 76.192C103.901 76.192 103.549 76.128 103.037 76L102.653 75.904C102.269 75.968 101.661 76 100.829 76H99.1969C98.7489 75.936 98.2369 75.904 97.6609 75.904C97.0209 76.672 96.1249 77.056 94.9729 77.056Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M127.133 78.688C125.405 78.688 123.837 78.112 122.429 76.96C121.021 75.808 119.805 74.24 118.781 72.256C116.925 68.8 115.549 64.064 114.653 58.048C114.013 53.888 113.533 49.088 113.213 43.648L113.117 38.56V33.376C113.053 31.712 113.021 29.696 113.021 27.328C113.021 23.488 113.181 20.096 113.501 17.152C113.757 14.08 114.397 11.04 115.421 8.032C116.445 5.408 117.917 3.552 119.837 2.464C120.989 1.952 122.141 1.696 123.293 1.696C126.685 1.696 129.373 3.04 131.357 5.728C133.533 8.736 134.973 12.096 135.677 15.808C136.701 20.288 137.277 24.576 137.405 28.672C137.661 33.216 137.789 37.504 137.789 41.536V47.008C137.789 48.096 137.629 50.144 137.309 53.152C137.053 55.52 136.925 57.536 136.925 59.2V59.584C136.541 61.376 136.349 63.488 136.349 65.92C136.349 67.712 135.965 69.568 135.197 71.488C134.429 73.408 133.341 75.04 131.933 76.384C130.525 77.92 128.925 78.688 127.133 78.688ZM127.325 73.408C128.605 73.408 129.693 72.224 130.589 69.856C131.357 67.744 131.901 65.184 132.221 62.176C132.605 59.104 132.925 55.648 133.181 51.808C133.309 50.144 133.373 48 133.373 45.376L133.277 36.544C133.149 33.088 132.765 28.768 132.125 23.584C131.613 19.168 130.653 15.264 129.245 11.872C128.605 10.272 127.805 9.024 126.845 8.128C125.885 7.232 124.861 6.784 123.773 6.784C122.173 6.784 120.989 8.032 120.221 10.528C119.261 13.152 118.621 16.032 118.301 19.168C117.917 22.56 117.693 25.792 117.629 28.864L117.533 32.032C117.469 32.928 117.437 34.144 117.437 35.68V36.064C117.437 40.352 117.885 45.632 118.781 51.904C119.805 60.416 121.309 66.464 123.293 70.048C124.573 72.288 125.917 73.408 127.325 73.408Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M177.253 77.632C176.357 77.632 175.621 77.28 175.045 76.576C173.381 69.664 171.109 57.152 168.229 39.04C165.029 19.712 163.077 8.224 162.373 4.576C162.629 3.36 163.493 2.752 164.965 2.752C166.053 2.752 167.397 6.848 168.997 15.04C170.661 23.296 172.293 32.64 173.893 43.072L176.485 60.064C177.509 52.384 178.309 46.624 178.885 42.784C180.101 33.952 180.997 26.656 181.573 20.896C182.149 15.072 182.437 9.568 182.437 4.384C183.397 3.104 184.549 2.464 185.893 2.464L187.909 3.52L186.469 16.48C186.149 20.448 185.349 27.648 184.069 38.08L183.205 44.416C182.501 50.048 181.797 55.36 181.093 60.352C180.133 67.584 179.237 72.608 178.405 75.424C178.021 76.896 177.637 77.632 177.253 77.632Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M214.94 76C213.916 76 213.148 75.808 212.636 75.424C212.188 75.04 211.964 74.4 211.964 73.504V60.928C211.132 60.352 209.564 59.84 207.26 59.392C204.956 58.944 202.78 58.656 200.732 58.528C200.028 59.872 199.516 61.504 199.196 63.424L198.812 65.344C198.748 65.792 198.556 66.784 198.236 68.32C197.916 69.856 197.564 71.2 197.18 72.352C196.796 73.44 196.412 74.304 196.028 74.944C193.596 74.944 192.188 74.304 191.804 73.024C192.508 72 193.308 68.992 194.204 64L197.372 46.432C198.78 38.112 200.06 31.008 201.212 25.12C202.428 19.232 203.708 14.304 205.052 10.336C206.524 5.92 207.932 3.712 209.276 3.712C210.62 3.712 211.644 3.968 212.348 4.48C212.348 7.04 212.956 13.216 214.172 23.008C215.452 32.608 216.092 39.168 216.092 42.688C216.092 46.08 216.444 50.944 217.148 57.28C217.788 63.744 218.108 68.896 218.108 72.736C218.108 74.912 217.052 76 214.94 76ZM209.948 55.36C210.46 55.36 211.1 55.264 211.868 55.072C211.676 52.256 211.356 48.768 210.908 44.608C209.436 30.144 208.7 21.28 208.7 18.016V17.248C208.06 17.888 207.164 20.8 206.012 25.984C204.924 31.104 203.9 36.608 202.94 42.496C201.98 48.384 201.468 52.288 201.404 54.208C204.092 54.976 206.94 55.36 209.948 55.36Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M247.254 76.96C246.038 76.96 244.854 76.096 243.702 74.368V74.08C243.51 70.688 242.934 66.912 241.974 62.752C241.014 58.592 239.606 53.568 237.75 47.68C236.342 43.264 235.158 39.296 234.198 35.776V73.6C234.198 74.624 234.006 75.392 233.622 75.904C233.302 76.352 232.63 76.576 231.606 76.576C230.838 76.576 230.23 76.352 229.782 75.904C229.334 75.392 229.11 74.752 229.11 73.984V73.216L229.302 44.992C229.43 36.672 229.494 27.296 229.494 16.864V5.056C229.494 4.288 229.654 3.776 229.974 3.52C230.294 3.2 230.966 3.04 231.99 3.04C233.59 3.04 235.062 3.36 236.406 4C237.75 4.576 238.902 5.408 239.862 6.496C241.846 8.736 243.126 11.424 243.702 14.56C243.958 15.84 244.086 17.312 244.086 18.976C244.086 19.936 243.99 20.992 243.798 22.144C243.67 23.296 243.574 24.032 243.51 24.352C243.382 24.992 243.094 25.952 242.646 27.232C242.198 28.512 241.91 29.344 241.782 29.728L240.63 32.416L239.67 34.912C239.734 37.216 240.118 40.128 240.822 43.648C241.59 47.168 242.422 50.432 243.318 53.44C243.958 55.552 245.11 59.072 246.774 64L249.558 72.448V72.64C249.558 73.728 249.462 74.656 249.27 75.424C249.078 76.448 248.406 76.96 247.254 76.96ZM234.006 31.456C234.902 30.56 235.99 29.312 237.27 27.712L238.71 19.456C238.774 19.136 238.806 18.688 238.806 18.112C238.806 16.256 238.454 14.112 237.75 11.68C237.366 10.528 236.854 9.568 236.214 8.8C235.638 7.968 235.03 7.52 234.39 7.456L234.198 17.056C234.006 21.344 233.91 24.672 233.91 27.04C233.91 29.28 233.942 30.752 234.006 31.456Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M262.716 76.576C261.5 76.576 260.444 76.416 259.548 76.096C258.46 75.776 257.916 74.88 257.916 73.408V17.632C257.916 16.544 257.724 14.912 257.34 12.736C256.892 10.752 256.668 9.12 256.668 7.84V7.552C257.756 5.76 258.556 4.608 259.068 4.096C259.964 4.096 261.148 3.968 262.62 3.712C263.964 3.456 265.148 3.328 266.172 3.328C267.196 3.328 268.188 3.648 269.148 4.288C270.108 4.864 270.588 5.568 270.588 6.4C270.588 8.32 269.116 9.28 266.172 9.28H264.828C264.444 9.216 263.996 9.184 263.484 9.184C262.908 9.184 262.556 9.216 262.428 9.28C262.428 11.456 262.556 14.08 262.812 17.152L263.004 19.84L263.196 25.12C263.196 26.336 263.1 28.192 262.908 30.688L262.716 36.064L264.06 35.776C265.34 35.392 266.396 35.2 267.228 35.2C267.932 35.2 268.572 35.488 269.148 36.064C269.724 36.576 270.012 37.184 270.012 37.888C270.012 38.656 269.756 39.36 269.244 40C268.796 40.576 268.22 40.864 267.516 40.864L266.364 40.768H265.116C264.156 40.768 263.484 40.992 263.1 41.44V71.104L268.476 70.816C272.124 70.816 273.948 71.648 273.948 73.312V73.696C273.564 74.464 272.86 75.104 271.836 75.616C270.812 76.064 269.82 76.352 268.86 76.48L265.692 76.576H262.716Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M288.379 77.056C287.547 77.056 286.779 76.736 286.075 76.096C285.435 75.52 285.115 74.816 285.115 73.984C285.115 73.408 285.243 72.704 285.499 71.872C285.691 70.976 285.787 70.304 285.787 69.856C285.787 64.16 285.467 53.216 284.827 37.024C284.187 23.2 283.867 12.288 283.867 4.288C283.867 3.712 284.091 3.264 284.539 2.944C284.987 2.56 285.531 2.368 286.171 2.368C286.939 2.368 287.611 2.656 288.187 3.232C288.763 3.744 289.051 4.384 289.051 5.152C289.051 8.992 289.243 14.752 289.627 22.432C289.947 30.944 290.107 36.704 290.107 39.712L290.203 40.864V42.016V42.688V43.168C290.395 48.736 290.491 57.056 290.491 68.128V70.624H297.883C299.227 71.584 299.899 72.544 299.899 73.504C299.899 74.208 299.643 74.848 299.131 75.424C298.683 75.936 298.139 76.192 297.499 76.192C297.307 76.192 296.955 76.128 296.443 76L296.059 75.904C295.675 75.968 295.067 76 294.235 76H292.603C292.155 75.936 291.643 75.904 291.067 75.904C290.427 76.672 289.531 77.056 288.379 77.056Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M326.971 76C325.947 76 325.179 75.808 324.667 75.424C324.219 75.04 323.995 74.4 323.995 73.504V60.928C323.163 60.352 321.595 59.84 319.291 59.392C316.987 58.944 314.811 58.656 312.763 58.528C312.059 59.872 311.547 61.504 311.227 63.424L310.843 65.344C310.779 65.792 310.587 66.784 310.267 68.32C309.947 69.856 309.595 71.2 309.211 72.352C308.827 73.44 308.443 74.304 308.059 74.944C305.627 74.944 304.219 74.304 303.835 73.024C304.539 72 305.339 68.992 306.235 64L309.403 46.432C310.811 38.112 312.091 31.008 313.243 25.12C314.459 19.232 315.739 14.304 317.083 10.336C318.555 5.92 319.963 3.712 321.307 3.712C322.651 3.712 323.675 3.968 324.379 4.48C324.379 7.04 324.987 13.216 326.203 23.008C327.483 32.608 328.123 39.168 328.123 42.688C328.123 46.08 328.475 50.944 329.179 57.28C329.819 63.744 330.139 68.896 330.139 72.736C330.139 74.912 329.083 76 326.971 76ZM321.979 55.36C322.491 55.36 323.131 55.264 323.899 55.072C323.707 52.256 323.387 48.768 322.939 44.608C321.467 30.144 320.731 21.28 320.731 18.016V17.248C320.091 17.888 319.195 20.8 318.043 25.984C316.955 31.104 315.931 36.608 314.971 42.496C314.011 48.384 313.499 52.288 313.435 54.208C316.123 54.976 318.971 55.36 321.979 55.36Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
        </svg>

        <style jsx>{`
          svg path:nth-child(2) {
            stroke-dasharray: 100%;
            stroke-dashoffset: 100%;
          }
          svg path:nth-child(3) {
            stroke-dasharray: 286px;
            stroke-dashoffset: 286px;
          }
          svg path:nth-child(4) {
            stroke-dasharray: 305px;
            stroke-dashoffset: 305px;
          }
          svg path:nth-child(5) {
            stroke-dasharray: 172px;
            stroke-dashoffset: 172px;
          }
          svg path:nth-child(6) {
            stroke-dasharray: 318px;
            stroke-dashoffset: 318px;
          }
          svg path:nth-child(7) {
            stroke-dasharray: 276px;
            stroke-dashoffset: 276px;
          }
          svg path:nth-child(8) {
            stroke-dasharray: 286px;
            stroke-dashoffset: 286px;
          }
          svg path:nth-child(9) {
            stroke-dasharray: 298px;
            stroke-dashoffset: 298px;
          }
          svg path:nth-child(10) {
            stroke-dasharray: 198px;
            stroke-dashoffset: 198px;
          }
          svg path:nth-child(11) {
            stroke-dasharray: 172px;
            stroke-dashoffset: 172px;
          }
          svg path:nth-child(12) {
            stroke-dasharray: 286px;
            stroke-dashoffset: 286px;
            animation: path-animation 1.2s ease forwards 1.7s,
              fill 1.2s ease forwards 2.5s;
          }

          svg path {
            animation: path-animation 1.2s ease forwards 0.5s,
              fill 1.2s ease forwards 2.5s;
          }

          @keyframes path-animation {
            to {
              stroke-dashoffset: 0px;
            }
          }
          @keyframes fill {
            from {
              fill: transparent;
            }
            to {
              fill: white;
            }
          }
        `}</style>
      </div>
    )
  }
}
