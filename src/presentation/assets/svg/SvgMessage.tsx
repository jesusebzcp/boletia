import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
export const SvgMessage = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={208}
    height={192}
    fill="none"
    {...props}>
    <Circle cx={112} cy={96} r={96} fill="#2233E7" fillOpacity={0.25} />
    <Path
      fill="#EA6613"
      d="M59.09 78.384c-1.613.35-2.375.786-3.824 2.122-1.367 1.28-2.142 3.052-2.257 5.139-.096 1.73.238 2.904 1.284 4.557.329.536.595 1.13.584 1.328-.021.397-1.133 2.47-1.377 2.556-.101.034-.172.23-.184.448-.01.199-.1.373-.18.369-.079-.004-.342.42-.591.964-.248.525-.512.969-.591.965-.08-.005-.17.17-.181.388-.012.219-.102.394-.181.39-.08-.005-.342.419-.592.963-.248.525-.512.97-.591.965-.08-.005-.169.17-.181.389-.012.218-.102.393-.181.388-.08-.004-.342.42-.591.965-.249.524-.512.968-.592.964-.08-.005-.169.17-.18.369-.012.218-.082.414-.164.449-.1.015-1.507 2.389-3.142 5.27-1.633 2.861-3.04 5.236-3.121 5.271-.102.034-.171.21-.182.409-.044.795-.461.772-1.412-.058-.495-.426-1.361-.992-1.907-1.222-1.033-.436-1.306-.909-1.002-1.71.118-.332.26-.364 1.089-.219.908.15.97.133 1.91-.672.544-.449.986-.883.99-.962.004-.06.252-.585.542-1.147.603-1.163.816-1.769 1.034-3.193.093-.613.297-1.06.525-1.207.289-.183.34-.38.259-1.082-.053-.482-.198-1.108-.321-1.414-.244-.631-1.883-1.658-2.658-1.701-.298-.017-.509-.168-.555-.41-.05-.202-.368-.558-.735-.778-.367-.22-.652-.474-.647-.554.005-.1-.17-.169-.37-.18-.218-.012-.451-.124-.505-.227-.053-.122-.824-.245-1.699-.293-.914-.05-1.574-.007-1.58.112-.006.1-.23.187-.509.172-.278-.016-.501.052-.508.171-.005.1-.19.19-.408.177-.219-.012-.402.058-.406.137-.006.1-.255.285-.541.409-.614.285-1.98 1.905-2.005 2.362-.01.179-.097.313-.176.309-.1-.005-.376.677-.601 1.502-.246.844-.54 1.844-.662 2.237-.121.392-.27 1.659-.335 2.832-.068 1.232-.196 2.103-.315 2.096-.199-.011-2.42 1.203-2.796 1.521-.125.113-.54.409-.932.646-.847.532-2.772 2.539-3.175 3.334-.177.329-.353.619-.436.674-.186.129-.8 1.87-1.156 3.266-.23.904-.276 1.38-.123 1.867.1.365.172.847.158 1.106-.028.516.457 1.839.832 2.278.111.146.22.351.215.431-.014.258 1.68 2.086 2.07 2.227.216.072.386.241.38.34-.005.1.17.189.368.2.219.012.433.104.488.186.18.349 3.888 1.451 5.06 1.515.875.049 1.312.451 1.292 1.168-.027.497.526 2.402.72 2.492.078.044.127.226.137.406-.01.179.146.607.327.955.2.331.468.904.627 1.271.408.92 2.53 3.649 3.388 4.374 1.316 1.089 1.765 1.612 1.744 1.99-.01.199.08.363.18.369.119.006.193.11.186.229-.01.199.557 1.108 1.373 2.229.742.998 2.272 2.538 2.796 2.806.29.155.52.347.515.427-.006.099.13.167.29.175.158.009.293.096.287.196-.005.099.187.229.442.303.55.15 1.68.631 2.125.875.194.11.925.23 1.62.269.716.039 1.346.173 1.42.297.071.144.388.181.85.127.4-.038 1.262-.11 1.92-.114l1.198-.033-1.339 1.142c-1.423 1.217-3.762 2.783-4.14 2.762-.119-.006-.223.068-.228.167-.008.139-1.726.922-4.58 2.081-.328.141-.811.234-1.07.22-.238-.013-.46.034-.465.134-.01.159-1.745.542-2.886.618-.4.038-.805.135-.87.231-.065.096-.586.148-1.162.116-.557-.031-1.139.037-1.265.149-.398.357-8.864-.508-9.258-.948-.114-.106-.368-.2-.587-.212-.437-.024-2.394-.69-2.896-.977a1.992 1.992 0 0 0-.746-.221c-.219-.012-.392-.121-.387-.22.007-.12-.148-.208-.346-.219-.2-.011-.53-.169-.74-.34-.19-.17-.52-.327-.698-.337-.2-.011-.353-.119-.347-.219.006-.119-.208-.211-.466-.225-.259-.014-.514-.088-.548-.189-.07-.184-1.622-1.326-1.82-1.337-.1-.005-.406-.242-.709-.537-.302-.296-.608-.532-.688-.537-.06-.003-.29-.175-.497-.386-.189-.19-.606-.572-.91-.848-1.941-1.682-5.56-6.207-5.521-6.903.006-.119-.068-.223-.187-.23a.199.199 0 0 1-.188-.209c.006-.1-.28-.694-.625-1.311s-.628-1.271-.618-1.45c.008-.159-.064-.302-.183-.309-.1-.005-.192-.13-.183-.289.009-.159-.09-.543-.231-.87a12.068 12.068 0 0 1-.454-1.181 11.94 11.94 0 0 0-.366-.957 1.912 1.912 0 0 1-.138-.746c.011-.199-.1-.703-.239-1.09-.137-.406-.243-1.01-.226-1.328.018-.318-.044-.64-.14-.705-.615-.433-.006-11.485.63-11.45.1.006.192-.228.208-.507.032-.576.659-2.555.966-3.057.13-.192.227-.505.238-.704.01-.199.104-.433.19-.548.105-.094.462-.792.822-1.53.36-.757.734-1.395.815-1.41.082-.036.17-.19.18-.369.009-.159.162-.41.33-.56.274-.264.313-.262.297.036-.019.338.408.92.686.935.08.004.423.283.745.599 1.665 1.607 1.976 1.764 2.598 1.32.374-.259.705-.839 1.216-2.166.21-.547.481-1.13.59-1.303.11-.194.208-.507.219-.706.01-.199.084-.434.146-.49.21-.188.975-2.12 1.018-2.536.01-.179.117-.333.217-.327.12.006.206-.128.215-.287.019-.338 1.295-3.598 1.483-3.747.064-.076.137-.331.152-.59.013-.238.124-.451.224-.446.298.017.326-1.577.025-1.912-.283-.295-1.488-.481-1.504-.203-.004.08-.313.262-.659.383-.366.139-1.45.637-2.394 1.124-.943.466-1.802.857-1.882.853-.1-.005-.183.07-.19.189-.005.099-.15.191-.309.182-.159-.009-.302.063-.309.183-.005.099-.11.193-.23.186-.119-.006-.508.192-.882.45-.373.259-.782.455-.902.449-.139-.008-.242.066-.249.186-.006.099-.11.193-.21.187-.199-.011-.446.135-1.134.676-.146.131-.372.238-.49.232-.12-.007-.223.047-.227.127-.006.099-.359.359-.772.615-1.773 1.059-2.017 1.883-.855 2.864a37.27 37.27 0 0 1 1.859 1.717c.357.399.718.359 1.166-.175.576-.686.79-.574.367.22-.2.368-.436.674-.536.668-.08-.004-.166.131-.175.29-.009.159-.096.293-.215.287-.1-.006-.206.108-.212.227-.008.139-.257.684-.546 1.226-.776 1.413-1.16 2.229-1.487 3.108-.144.431-.352.958-.464 1.171-.111.213-.254.644-.333.979a315 315 0 0 0-.675 2.853c-.463 1.889-.553 2.801-.625 5.548-.041 1.832.004 3.908.14 4.693.118.764.267 1.67.308 2.011.062.323.156.786.243 1.01.068.223.266.972.447 1.66.16.707.349 1.275.448 1.281.08.004.133.127.125.266-.028.516 2.095 5.04 2.373 5.055.08.004.133.127.126.246-.008.139.229.551.509.905.54.688 1.02 1.373 1.59 2.261.497.745 2 2.423 2.649 2.937.286.236.722.638.968.891.244.273.491.486.55.489.08.004.253.134.385.261.623.632.853.804 1.032.814.1.005.215.072.25.153.138.407 4.149 2.881 4.685 2.91.14.008.295.076.33.158.069.203 1.941.964 2.378.988.18.01.314.097.309.197-.006.099.325.237.74.32.394.081 1.613.388 2.694.666 2.516.657 6.847.936 9.834.642 1.163-.115 2.268-.274 2.452-.363.205-.089.507-.152.706-.141.636.035 2.663-.571 4.884-1.445.816-.334 1.568-.592 1.688-.585.099.005.182-.05.187-.149.005-.08.355-.28.783-.456.815-.314 1.43-.639 1.786-.938.126-.113.58-.387.992-.643.413-.257.767-.516.772-.616.005-.079.107-.133.207-.128.119.007.973-.664 1.915-1.469 1.508-1.313 1.858-1.513 2.928-1.753 1.189-.234 1.838-.437 2.594-.774.204-.089.447-.155.566-.148.12.006.669-.183 1.26-.429.572-.248 1.18-.434 1.32-.426.139.008.264-.085.269-.185.007-.119.15-.191.31-.182.158.009.807-.195 1.459-.438.651-.243 1.405-.541 1.689-.625.285-.104.754-.297 1.06-.42.287-.143.671-.242.85-.232.179.01.324-.082.33-.181.006-.12.13-.192.268-.185.14.008.646-.144 1.116-.337.449-.195.876-.351.936-.347.298.016-.334 15.094-.732 17.265-.172.948-.16 1.088.204 1.367.4.321.521 1.385.153 1.564-.083.055-.22.745-.284 1.539-.064.794-.204 1.524-.309 1.618-.126.113-.244.804-.284 1.539-.064 1.153.015 1.536.532 2.642.568 1.267.734 1.515 1.795 2.89.278.374.517.746.513.825-.005.08.196.41.458.724.262.313.462.663.454.802-.007.139.066.263.145.267.1.006.32.337.518.727.178.388.4.719.479.724.1.005.151.148.142.307-.008.159.083.303.183.309.119.006.193.11.185.249-.006.12.19.529.45.902.258.373.458.723.454.783-.01.179.547.927 1.449 1.934.563.629.947.91 1.247.886.901-.07.99-.603 1.18-6.574.089-3.065.113-5.676.04-5.78-.224-.291.181-8.005.427-8.131.412-.236 1.24-4.756 1.622-8.802.135-1.368.325-2.654.437-2.867.111-.213.269-.902.324-1.537l.122-1.13 2.823 1.591c1.546.883 3.114 1.747 3.484 1.907.82.324 2.745.47 2.76.192.007-.12.23-.187.488-.173.457.025 1.791-.659 2.382-1.244.631-.604 1.46-1.914 3.824-6.09 1.345-2.338 2.49-4.289 2.57-4.304.102-.035.169-.17.176-.29.016-.298 1.186-2.347 1.389-2.415.081-.036.151-.211.161-.39.065-.814.534-1.008 2.223-.914.875.048 1.614.029 1.619-.071.005-.079.414-.276.922-.447.509-.192.92-.408.925-.508.006-.099.149-.171.308-.162.159.009.302-.043.307-.143.004-.079.358-.339.771-.595.412-.257.867-.551.992-.643.126-.113.496-.312.824-.473.94-.427 1.638-.787 1.743-.881.272-.244 1.874-1.093 2.053-1.083.1.005.204-.089.21-.188.006-.119.09-.195.21-.188.198.011 2.984-1.69 3.446-2.123.147-.131.287-.502.306-.84.028-.517-.046-.621-.463-.644-.279-.015-.492-.127-.486-.226.006-.119-1.719-.294-4.76-.462-5.208-.287-5.091-.24-4.309-1.394.238-.345.44-.753.448-.892.008-.159.077-.315.178-.349.184-.07 1.353-2.119 1.37-2.417.006-.119.074-.255.175-.289.183-.07 1.353-2.119 1.369-2.417.007-.119.134-.252.276-.304.162-.031.274-.623.352-2.034.103-1.868.071-2.01-.479-2.897-.785-1.3-1.413-1.852-3.191-2.868-.851-.485-1.563-.943-1.597-1.045-.036-.081-.172-.149-.291-.155-.298-.017-2.347-1.186-2.416-1.389-.035-.082-.171-.149-.29-.156-.298-.016-2.347-1.186-2.416-1.389-.035-.082-.191-.15-.35-.159-.159-.009-.624-.254-1.046-.556-.422-.302-.887-.547-1.046-.556-.159-.009-.314-.077-.349-.179-.07-.183-2.118-1.353-2.416-1.369-.12-.007-.256-.074-.29-.176-.07-.183-2.118-1.352-2.437-1.37-.119-.006-.235-.073-.23-.172.005-.08-.38-.34-.864-.586-.485-.246-.87-.506-.864-.606.004-.079-.111-.146-.23-.152-.319-.018-2.368-1.187-2.436-1.39-.036-.082-.171-.149-.29-.156-.299-.016-2.348-1.186-2.416-1.39-.036-.08-.172-.148-.29-.155-.3-.016-2.348-1.186-2.417-1.389-.035-.082-.23-.152-.45-.164-.198-.011-.372-.1-.368-.18.004-.08-.42-.342-.964-.592-.525-.248-.969-.511-.965-.59.005-.08-.17-.17-.388-.182-.219-.012-.394-.101-.39-.18.005-.08-.419-.343-.963-.592-.525-.248-.969-.512-.965-.592.005-.08-.17-.168-.369-.18-.218-.011-.414-.082-.448-.184-.016-.08-2.14-1.334-4.691-2.79l-4.64-2.648.095-.992c.143-1.507-.107-3.475-.581-4.638-.44-1.06-2.444-3.404-2.942-3.431a.81.81 0 0 1-.484-.246c-.32-.357-2.224-.9-3.298-.94-.537-.03-1.439.06-2.003.169Zm5.2 1.523c.461.324 1.016.753 1.223.964.208.211.438.383.537.389.08.004.154.108.147.227-.008.14.138.387.327.576.302.316.64 1.052 1.088 2.333.24.711.107 3.475-.18 3.619-.102.054-.22.367-.238.704-.017.319-.111.573-.21.567-.1-.005-.27.185-.362.419-.234.625-2.202 2.33-3.162 2.736-1.428.6-2.993.772-4.13.43-2.492-.735-4.21-2.125-4.984-4.002-.175-.428-.386-.959-.475-1.143-.089-.204-.116-1.163-.06-2.156.054-.994.186-1.944.297-2.137.109-.174.375-.658.596-1.064.221-.387.478-.711.558-.707.1.005.164-.09.17-.19.036-.656 2.88-2.353 4.041-2.429.421-.037 1.494.023 2.366.13 1.249.129 1.759.277 2.451.734Zm4.65 9.686c.188.21 2.24 1.32 2.46 1.332.118.007.254.074.29.156.068.203 2.117 1.372 2.415 1.389.12.006.255.074.29.155.07.203 2.118 1.373 2.416 1.39.12.006.255.073.29.155.07.203 2.118 1.373 2.416 1.39.12.006.255.073.29.155.07.203 2.118 1.373 2.417 1.389.119.007.255.074.29.156.069.203 2.118 1.372 2.436 1.39.119.006.234.092.228.192-.005.1.38.36.864.606.486.226.871.466.867.546-.005.099.11.165.23.172.318.018 2.367 1.187 2.437 1.37.034.102.17.169.289.176.298.016 2.347 1.186 2.417 1.369.034.102.19.17.349.179.159.009.605.233 1.008.514.385.26 2.799 1.669 5.35 3.126 2.552 1.456 4.676 2.71 4.692 2.79.034.102.17.169.289.176.298.016 2.347 1.186 2.417 1.369.034.102.17.169.289.176.219.012 2.271 1.122 2.459 1.331.056.063.344.259.634.434.657.375 1.647 1.586 1.626 1.964-.011.199-.355.299-1.054.32-1.419.062-3.464.268-4.572.466a8.968 8.968 0 0 1-1.741.124c-.457-.026-.899.03-.965.146-.065.096-.627.165-1.224.132-.596-.033-1.236.011-1.441.1-.184.089-1.149.236-2.15.3-.981.086-2.304.212-2.906.279-1.724.184-3.188.322-4.711.478-.762.077-2.207.237-3.21.361-.984.125-2.246.235-2.805.244-.54.03-1.183.115-1.406.182-.224.087-1.208.213-2.21.297-2.161.16-3.766.331-4.65.461-.482.074-.66.024-.648-.175.014-.258-.845-2.399-1.052-2.63-.094-.105-1.123-2.414-3.622-8.075-.69-1.573-1.315-2.903-1.394-2.927-.097-.046-.146-.248-.133-.466.01-.199-.04-.381-.119-.386-.1-.005-.315-.436-.484-.983-.19-.529-.384-.998-.44-1.061-.076-.064-.362-.658-.644-1.332a52.927 52.927 0 0 0-1.103-2.413c-.322-.676-.585-1.328-.578-1.467.008-.14-.043-.302-.12-.346-.195-.09-1.663-3.461-1.647-3.76.007-.119.384-.457.838-.73.453-.275.829-.573.832-.633.003-.06.217-.327.491-.59.254-.266.62-.744.796-1.053.53-.928.695-1.039 1.138-.755.212.131.423.282.48.345ZM57.292 92.94c.833.445 1.287.53 3.135.631 1.51.103 2.21.062 2.278-.094.048-.136.292-.223.55-.209.358.02.527.209.677.736.119.385.3.714.38.718.079.005.15.148.142.307-.01.18.183.668.437 1.12.254.454.446.943.438 1.102-.01.159.042.32.139.366.078.024.544.987 1.02 2.11.476 1.123.922 2.084.978 2.147.057.063.468.923.91 1.944.423 1.001.834 1.861.932 1.906.077.044.129.186.122.306-.016.298.921 2.463 1.116 2.553.077.045.126.247.115.445-.011.199.037.401.135.446.078.025.579 1.069 1.108 2.314.53 1.226 1.01 2.289 1.067 2.352.056.063.605 1.329 1.241 2.8l1.147 2.715 1.497-.037c.82-.035 1.66-.108 1.845-.198.184-.089.785-.136 1.342-.105.536.029 1.059-.042 1.124-.138.066-.116.428-.176.766-.157.358.02 1.34-.066 2.203-.178.864-.112 1.925-.193 2.342-.17.418.023.84-.053.906-.149.066-.116.547-.169 1.044-.142.517.029 1.197-.014 1.54-.094.789-.196 3.295-.457 4.793-.494.62-.026 1.202-.113 1.267-.209.065-.096.646-.144 1.282-.109.636.035 1.238-.032 1.303-.128.066-.116.508-.171.965-.146.459.005 1.419-.061 2.144-.181a15.117 15.117 0 0 1 2.143-.181c.457.025.9-.05.965-.146.066-.116.488-.173.905-.15a7.723 7.723 0 0 0 1.641-.108 97.138 97.138 0 0 1 2.59-.316c1.624-.17 1.742-.144 1.942.206.235.432.188 2.024-.098 2.507-.109.173-.4.736-.627 1.242-.228.525-.47.931-.549.926-.1-.005-.169.17-.181.389-.012.219-.102.393-.181.389-.08-.005-.342.42-.592.964-.248.525-.512.969-.591.964-.08-.004-.169.171-.181.389-.012.219-.101.393-.181.389-.079-.004-.342.42-.591.964-.249.525-.512.969-.592.965-.079-.005-.169.17-.18.368-.011.199-.163.43-.345.48-.182.05-2.233-.004-4.559-.132l-4.233-.233-.093-.484c-.093-.483-.172-.508-2.234-.721-1.169-.124-2.793-.313-3.606-.398-.812-.104-3.524-.453-6.04-.751-2.494-.317-5.146-.683-5.896-.824a16.882 16.882 0 0 0-2.215-.321c-.894-.049-3.105.267-4.08.592-.306.123-.773.277-1.058.381-.283.084-.73.239-1.015.343-.284.084-.753.277-1.06.4-.286.143-.67.242-.85.232-.178-.01-.322.062-.328.181a.199.199 0 0 1-.21.188c-.1-.005-.187-.229-.172-.488.015-.278.13-.551.232-.605.123-.053.225-.466.25-.903.022-.418.141-.77.24-.765.14.008.247-1.202.326-3.73.136-3.92.09-5.239-.23-5.954-.123-.306-.109-.564.066-.834.131-.212.265-.843.296-1.399.045-.815-.004-1.017-.356-1.136-.84-.326-1.334-.034-1.732 1.041-.19.548-.366 1.216-.38 1.454-.013.259-.107.513-.23.566-.102.054-.225.466-.248.883-.023.418-.124.811-.227.865-.083.055-.246.485-.35.938-.442 2.228-1.142 4.064-1.074 2.831.017-.298-.05-.541-.169-.547-.1-.006-.191-.15-.181-.329.016-.298-.41-.9-.648-.913-.497-.027-.779.754-1.196 3.264-.223 1.503-.52 2.902-.63 3.115-.112.213-.358.698-.538 1.067-.403.795-1.154 1.412-2.194 1.833-.408.157-.797.355-.86.411-.063.056-.736.318-1.528.594-.773.276-1.506.555-1.631.648-.104.074-.367.139-.605.126-.239-.013-.502.052-.606.146-.292.223-2.55.677-3.186.642-.298-.017-.72.06-.927.188-.617.345-1.86-.262-2.836-1.373-.47-.524-.838-1.063-.83-1.202.007-.139-.086-.264-.225-.271-.179-.01-.175-.07.013-.239.42-.375.331-.939-.33-1.952-1.305-2.026-1.942-3.118-1.931-3.316.005-.1-.069-.203-.148-.208-.1-.005-.32-.337-.519-.726-.178-.389-.399-.72-.478-.724-.1-.006-.154-.109-.148-.208.013-.238-.93-1.925-1.125-2.016-.097-.045-.148-.207-.14-.346.007-.14-.084-.304-.22-.352-.156-.068-.146-.247.099-.712.178-.349.373-.617.452-.613.1.006.166-.11.172-.23.013-.238 1.123-2.29 1.333-2.478.21-.188 1.32-2.24 1.332-2.459.006-.119.074-.255.175-.289.183-.07 1.353-2.119 1.37-2.417.006-.119.073-.255.175-.289.183-.07 1.353-2.119 1.37-2.417.006-.119.073-.255.175-.29.183-.069 1.352-2.118 1.369-2.416.007-.12.074-.255.175-.29.184-.069 1.353-2.118 1.37-2.416.006-.12.074-.255.175-.29.183-.07 1.353-2.118 1.37-2.436.007-.12.073-.236.173-.23.08.004.32-.381.546-.867.246-.485.506-.87.606-.864.1.005.185-.11.194-.268.009-.16.233-.606.473-.991.413-.615.495-.65.78-.396.17.169.749.52 1.271.808Zm-19.541 9.091c.348.558 1.257 1.066 1.953 1.105.298.016.611.113.664.236.055.102.606.232 1.202.265l1.073.059-.058 1.054c-.051.934-.677 2.893-1.034 3.213-.083.055-.153.25-.162.409-.009.159-.373.618-.833 1.011-.673.621-.938.726-1.633.688-.438-.024-.81-.145-.804-.244.006-.119-.109-.205-.268-.214-.159-.009-.539-.349-.856-.745-.465-.604-1.16-1.001-1.178-.683-.007.119.855 2.579 1.05 3.009a2 2 0 0 1 .137.765c-.018.338-.16.39-1.035.341-.557-.03-1.168-.164-1.38-.275-.366-.239-.465-.983-.147-1.324.105-.094.377-.697.612-1.342.255-.644.527-1.247.614-1.362.085-.095.18-.369.194-.627.014-.258.113-.612.223-.805.55-.927 1.154-3.565.836-3.583-.239-.013-.241-1.05-.01-1.256.251-.226.564-.109.84.305Zm-19.888-.896c-.013.238-.83 2.406-1.144 3.027-.111.213-.503 1.169-.856 2.146-.372.956-.736 1.774-.817 1.809-.102.034-.175.27-.188.508-.013.239-.108.513-.194.627-.085.095-.357.699-.612 1.342-.235.645-.508 1.248-.612 1.342-.086.115-.183.429-.2.727-.016.298-.113.612-.236.665-.103.054-.213.247-.222.406-.01.179-.142.411-.29.563-.313.261-.722.079-1.4-.636a37.132 37.132 0 0 0-.986-.931c-.686-.577-.767-.92-.326-1.314.147-.132.428-.535.607-.884.158-.33.373-.617.452-.613.1.005.166-.111.175-.27.008-.159.142-.41.289-.542.127-.132.385-.477.561-.786.176-.29.388-.517.487-.512.08.005.165-.09.17-.19.011-.199.183-.428.816-1.051.127-.133.256-.305.26-.385.005-.079.154-.251.321-.401.274-.264.267-.862-.031-.879-.06-.003-.37.199-.683.461-.314.262-.604.465-.664.462-.06-.003-1.21.97-2.57 2.151-1.342 1.182-2.552 2.152-2.651 2.147-.12-.007-.464-.265-.786-.562a9.521 9.521 0 0 0-.99-.872c-.248-.193-.43-.502-.418-.721.023-.417.778-1.093 1.216-1.089.12.006.242-.047.248-.146.004-.08.337-.34.73-.578.391-.237.97-.624 1.283-.866.332-.241.745-.497.947-.546.183-.05.35-.18.355-.28.005-.099.109-.173.208-.168.12.007.324-.081.469-.173.396-.317 2.57-1.434 4.307-2.195.88-.41 1.64-.807 1.704-.883.153-.251 1.284-.149 1.27.09Zm51.971 9.503c.051.162-.086.852-.284 1.539a34.95 34.95 0 0 0-.508 1.986c-.083.414-.22.745-.3.741-.08-.005-.22.367-.324.819-.358 1.795-.81 3.485-.977 3.615-.084.075-.165.469-.187.867-.023.417-.167.848-.332.959-.5.371-.538-.369-.096-1.88.222-.765.452-1.69.532-2.064.06-.375.208-.866.319-1.079.091-.214.381-1.135.612-2.06.23-.924.521-1.865.635-2.118.114-.253.215-.646.23-.904.037-.676.511-.969.68-.421Zm-34.971 2.2c.054.102.903.249 1.877.302 1.312.073 1.904.185 2.347.469.327.217.593.451.588.531-.005.099.111.165.27.174.258.014.464.265 1.52 1.719.15.187.406.6.587.929.163.308.365.618.421.681.188.21.567.929.648 1.272.068.203.179.369.278.374.1.006.174.11.166.249-.007.119.19.529.449.902.258.373.456.762.45.882-.007.119.047.222.146.227.08.005.395.441.687.935.31.516.606.931.706.936.08.005.131.147.122.306-.008.159.063.303.143.307.338.019.547.927.305 1.333-.348.539-3.281 3.109-4.168 3.638-.433.255-.786.515-.79.594-.006.1-.128.153-.247.146-.14-.007-.749.198-1.342.465-1.002.463-1.103.477-1.264.149a3.313 3.313 0 0 0-.405-.62c-.131-.147-.482-.645-.776-1.1a41.917 41.917 0 0 0-.777-1.099c-.132-.147-.239-.372-.233-.472.015-.278-.474-.803-.773-.82-.278-.015-.148 1.248.145 1.364.117.046.185.249.173.468-.01.199.059.382.158.388.1.005.227.231.271.513.064.283.191.509.29.514.12.007.192.151.183.31-.009.159.083.303.182.309.12.006.192.13.185.269-.008.139.285.614.639 1.072.353.458.648.893.644.973-.014.258 2.694 3.218 3.349 3.633.325.237.61.492.606.572-.004.079.13.167.29.175.576.032.248.552-.702 1.158-.558.348-1.035.681-1.098.737-.276.304-2.92 1.633-3.2 1.618-.317-.017-2.426-1.908-2.887-2.591a8.244 8.244 0 0 0-.501-.666c-.15-.168-.28-.354-.276-.434.004-.06-.199-.37-.46-.683-.262-.314-.462-.664-.455-.803.007-.119-.045-.261-.122-.306-.195-.09-1.132-2.255-1.115-2.573.007-.119-.066-.243-.165-.249-.1-.005-.206-.25-.248-.571-.023-.301-.18-1.087-.342-1.754a29.596 29.596 0 0 1-.394-2.613c-.152-1.584.03-5.621.287-6.664.616-2.498 1.01-3.852 1.179-4.022.085-.095.183-.428.2-.727.017-.318.118-.711.229-.904.129-.172.38-.737.607-1.262.3-.742.47-.912.847-.891.239.013.513.108.566.231Zm34.29 10.901c-.188.508-.358 1.057-.367 1.216-.01.179-.097.313-.216.307-.1-.006-.209.168-.22.386-.013.219-.102.394-.221.387-.1-.005-.206.108-.213.247-.04.716-2.94 3.766-4.232 4.433-.328.161-.62.384-.624.464-.004.079-.148.151-.307.142-.159-.008-.302.063-.309.183-.005.099-.13.192-.289.183-.159-.009-.424.096-.57.208-.293.263-.97.604-2.442 1.261-.491.232-.923.468-.967.545-.045.097-.168.15-.267.145-.1-.006-.933.287-1.852.675-.937.367-2.037.785-2.442.902-.425.116-.774.297-.778.376-.004.08-.267.145-.565.128-.318-.017-.64.025-.704.101-.292.243-2.273.732-2.91.697-.337-.018-.7.061-.786.176-.089.155-.188.149-.338-.018-.113-.126-.465-.245-.763-.262-1.034-.057-2.546-1.197-4.634-3.465l-2.03-2.245.919-.388c.51-.211 1.169-.594 1.481-.836.333-.241.663-.442.742-.437.1.005.871-.61 1.75-1.379 1.448-1.296 1.591-1.368 1.853-1.054.99 1.21 1.708 1.928 1.907 1.939.14.008.273.115.305.256.083.304 2.926.44 3.52.174.224-.107.667-.183 1.005-.164.338.019.622-.065.627-.165.007-.119.15-.191.35-.18.516.028 2.48-.521 2.49-.7.005-.08.227-.147.506-.132.278.016.502-.072.508-.171.006-.119.13-.192.289-.184.139.008 1.014-.303 1.913-.712 2.983-1.311 3.686-2.488 4.148-6.889.138-1.428.27-2.018.427-1.95.312.117.645 1.312.596 2.206-.003.419.077.762.177.767.119.007.19.151.181.329-.018.318.656 1.113.935 1.129.457.025 1.49-2.092 1.57-3.164.016-.298.129-.531.228-.525.12.006.218-.347.241-.765.024-.437.147-.849.25-.903.122-.053.221-.407.242-.784.021-.378.14-.73.243-.784.122-.053.236-.306.269-.544.053-.236 0 1.436-.087 3.744-.143 3.321-.26 4.372-.54 5.094Zm12.015.841c3.405.447 7.265.939 9.86 1.241l2.021.231-.017 1.036c-.056 2.111-.27 3.833-.69 5.305-.227.845-.484 1.529-.563 1.525-.1-.006-.171.209-.187.488-.015.278-.106.492-.226.486-.1-.006-.208.168-.22.386-.021.378-.162.39-4.475.152-2.425-.133-4.972-.214-5.632-.19l-1.179.054-1.053-1.154c-1.185-1.282-2.786-2.267-4.397-2.695-1.24-.307-6.025-.651-7.051-.488-1.146.176-3.363.253-2.897.12.365-.12 2.292-1.808 2.304-2.027.005-.079.176-.289.384-.457.19-.169.635-.663.96-1.124.366-.498.888-.928 1.356-1.101.406-.137.915-.328 1.1-.418.204-.088.507-.152.665-.143.16.009.303-.063.309-.162.005-.1.21-.208.472-.253.604-.107 1.843-.517 1.97-.649.212-.228 2.643-.572 3.718-.533.438.004 2.003.19 3.468.37Zm15.897 2.053.537.029-.158 2.862c-.094 1.71-.24 2.918-.364 2.991-.103.054-.218.327-.232.585-.028.517-.704 1.915-.948 2.002-.101.034-.172.229-.184.448-.018.338-.18.369-1.909.274-1.034-.057-1.884-.184-1.878-.283.005-.1.163-.43.338-.719.177-.31.339-.719.349-.898.01-.179.121-.392.224-.446.122-.053.224-.447.247-.864.022-.398.145-.829.25-.923.147-.132.29-1.3.396-2.85l.146-2.643 1.324.212c.712.099 1.544.205 1.862.223Zm6.864 1.714c-.111.193-.398.695-.621 1.122-.222.426-.527.888-.674 1.019-.147.132-.28.384-.289.543-.009.159-.095.274-.214.267-.099-.005-.205.108-.213.247-.008.14-.204.448-.436.674-.232.227-.424.455-.427.515-.004.08-.133.252-.26.384-.57.567-.804.833-.81.953-.004.059-.385.457-.825.851-.693.64-.958.745-1.634.708-.855-.047-1.002-.275-.583-.989.792-1.352 1.174-2.866 1.295-5.053l.104-1.888 2.882.159c2.703.149 2.881.178 2.705.488Zm13.677.713c-.016.299-.965 1.243-1.244 1.228-.079-.005-.327.141-.555.308-.23.187-.643.443-.93.587-1.682.864-3.819 2.022-4.028 2.19-.145.092-.349.18-.468.174-.1-.006-.202.049-.208.148-.004.08-.335.3-.724.478-.39.198-.721.419-.726.519a.172.172 0 0 1-.168.15c-.099-.006-.942.446-1.869.994-1.628.966-2.4 1.223-2.214.735.047-.117.276-.304.482-.412a6.64 6.64 0 0 0 .911-.628c.292-.223.621-.404.72-.399.1.006.327-.141.517-.33.399-.377 1.018-.742 1.523-.873.184-.07.349-.18.355-.28.005-.099.109-.173.208-.168.239.013 1.926-.93 2.017-1.145.044-.077.167-.13.266-.125.239.014 2.523-1.276 2.614-1.49a.328.328 0 0 1 .268-.145c.238.013 2.532-1.456 2.625-1.69.134-.272.646-.144.628.174Zm-43.084 3.249c.724.239 1.348.493 1.364.573.034.102.23.172.448.185.199.01.374.1.367.219-.005.099.108.205.247.213.378.021 2.033 1.827 2.012 2.204-.008.159.063.303.143.307.159.009.37.519.919 2.144.172.488.264.992.549 3.42.292 2.289-.196 11.513-.818 15.207l-.396 2.47-2.093.005c-2.233-.004-6.735-.431-7.1-.691-.173-.109-.163-1.384.001-4.366.213-3.856.279-4.331.741-5.482.298-.701.59-1.303.653-1.359.083-.056.331-.58.563-1.165.252-.585.5-1.109.6-1.124.082-.035.156-.29.17-.549.014-.258.086-.473.185-.468.18.01.646-1.22.563-1.524-.083-.304-.619-.353-.634-.075-.006.099-.23.187-.508.171-.278-.015-.501.053-.508.172-.005.099-.17.19-.369.179-.198-.011-.544.109-.771.256-.208.149-.553.269-.732.259-.2-.011-.362.06-.37.179-.005.1-.229.187-.507.172-.278-.016-.501.052-.508.171-.005.099-.15.191-.329.181-.179-.01-.604.107-.952.267-1.186.552-1.369.602-1.667.586-.159-.009-.301.043-.307.142-.007.14-1.043.481-1.97.669-.262.046-.468.154-.473.253-.005.1-.13.173-.268.165-.14-.008-.748.178-1.32.426-.591.246-1.2.432-1.359.423-.159-.008-.302.063-.309.183-.005.099-.23.186-.508.171-.278-.015-.501.052-.508.172-.005.099-.15.191-.329.181-.178-.01-.602.086-.95.227-3.887 1.44-9.217 1.565-12.214.244-2.61-1.141-4.848-3.198-6.264-5.729-.508-.905-.557-1.825-.12-1.801.159.009.321-.042.366-.139.09-.194 1.778-1.138 2.016-1.125.1.006.203-.069.208-.148.004-.08.316-.302.685-.501.35-.18.762-.436.887-.529.126-.113.56-.408.973-.664.413-.256.767-.516.772-.615.012-.219.903-.11 1.129.142.244.272 3.225.436 3.498.192.126-.112.529-.19.887-.17.357.02.661-.063.666-.163.007-.119.19-.189.409-.177.199.011.723-.099 1.15-.255.428-.156.957-.346 1.18-.414.873-.291 2.854-1.138 2.922-1.294.044-.078.306-.123.564-.109.259.015.48-.033.486-.132.005-.08.415-.297.924-.488.51-.191.92-.408.924-.487.006-.1.148-.152.307-.143.179.01.668-.182 1.12-.436.453-.255.942-.447 1.121-.437.16.009.304-.083.31-.182.006-.12.309-.183.666-.163.378.021.74-.019.824-.114.357-.32 4-.577 6.585-.455 2.048.093 3.096.251 4.057.543Zm26.656 4.698c.137.048-.044.815-.203.807-.1-.006-.206.108-.212.227-.018.318-1.188 2.367-1.37 2.437-.102.034-.17.17-.176.289-.013.239-1.143 2.29-1.332 2.459-.063.056-1.008 1.659-2.09 3.573-1.103 1.913-2.048 3.496-2.13 3.531-.1.035-.168.17-.175.29-.017.318-.877 1.088-1.195 1.07-.14-.007-.263.066-.27.185-.005.099-.15.191-.309.182-.159-.009-.302.063-.308.163-.03.536-3.528.344-4.055-.224a.965.965 0 0 0-.526-.208c-.2-.011-.375-.081-.41-.182-.069-.184-2.118-1.353-2.416-1.37-.12-.006-.255-.073-.29-.175-.015-.081-.554-.429-1.153-.761l-1.102-.639-.005-1.715c-.017-2.593-.15-5.611-.307-6.736-.166-1.325-.532-3-.685-3.128-.056-.063-.142-.307-.189-.549-.077-.403-.015-.439 1.342-.464.778-.017 4.322.078 7.883.215 4.835.187 6.53.18 6.74-.008.21-.187.705-.14 2.578.242 1.261.269 2.326.487 2.365.489Zm-26.086 22.946 3.916.216-.075 1.352-.074 1.352-.854.291c-1.138.396-6.168.139-7.515-.374l-.878-.347.112-1.31c.14-1.807.206-1.942.888-1.646.311.137 2.174.339 4.48.466Zm-4.153 3.719c.163.308 5.95.587 6.464.297.678-.362.788.163.625 3.124-.143 2.604-.17 2.742-.549 2.722-.218-.013-.392-.122-.386-.221.006-.119-.208-.211-.486-.226-.278-.016-.494-.087-.488-.187.004-.079-.38-.34-.865-.586-.485-.246-.87-.506-.865-.586.005-.099-.17-.169-.389-.181-.219-.012-.392-.121-.386-.22.006-.12-.129-.207-.288-.215-.159-.009-.293-.096-.288-.196.005-.099-.146-.247-.321-.317-.196-.07-.655-.414-1.014-.773-.36-.339-.723-.638-.783-.641-.06-.004-.309-.177-.516-.408-.548-.528-.527-1.644.03-1.613.218.012.452.105.505.227Zm-1.388 7.101c.048.222.197.41.296.415.1.006.174.11.167.229-.005.099.252.492.55.868.319.376.613.831.663 1.013.048.202.159.368.238.372.08.004.3.336.499.725.177.389.398.72.478.724.1.006.151.148.143.307-.01.159.043.302.142.307.08.005.3.336.479.724.197.39.418.721.518.727.08.004.153.108.148.207-.013.239.93 1.926 1.145 2.017.077.044.128.207.12.366-.01.159.044.281.143.287.08.004.34.338.578.729.237.392.624.972.886 1.285.633.813.792 1.18.598 1.449-.11.173-.321.042-.713-.438-.82-1.042-1.555-2.179-1.542-2.418.007-.119-.067-.223-.147-.227-.1-.006-.32-.337-.518-.727-.178-.388-.4-.719-.479-.724-.099-.005-.152-.128-.143-.287.008-.159-.042-.321-.12-.365-.097-.045-.648-.893-1.232-1.882-.582-1.009-1.169-1.939-1.282-2.065-.768-.899-2.126-3.387-2.1-3.844.02-.358.37-.199.485.226ZM95.485 81.845c-1.01.602-1.671 1.383-1.834 2.171-.104.433-.288.882-.414.994-.736.698-.827.892-.585 1.204.13.167.48.326.799.344.378.02.763.26 1.194.763.357.399.816.743 1.055.756.218.012.472.106.525.228.146.248 1.556.345 2.047.133.184-.09.591-.246.918-.388.306-.123.557-.328.566-.487.007-.14.093-.254.213-.248.218.012.666-1.239.71-2.034.039-.716-.661-2.489-1.05-2.65-.156-.068-.6-.332-.966-.571-.827-.544-2.436-.653-3.178-.215Zm2.982.882c.443.283.899.687 1.007.893.088.224.254.452.33.516.249.193.073 2.297-.229 2.72-.434.633-1.329.963-2.382.904-.776-.042-1.147-.182-1.757-.694-.438-.364-.797-.722-.792-.822.006-.099-.224-.271-.497-.386-.488-.186-.486-.226-.171-.508.189-.169.354-.638.375-1.016.045-.815.92-1.863 1.536-1.83.199.012.363-.079.369-.178.02-.378 1.382-.123 2.21.4ZM120.103 106.907c-.071.196-.23.546-.343.799-.114.253-.213.606-.223.785-.011.199-.152.59-.288.881-.332.6-.992.643-2.061.146-.738-.36-1.921-.604-1.893-.384.014.101.007.24 0 .359-.005.1.168.209.387.221.198.011.572.111.825.225.252.113.818.344 1.287.509l.841.306-.163.788c-.105.453-.268.883-.373.977-.106.114-.203.427-.219.725-.017.299-.114.612-.236.665-.308.163-.263.424.067.582.331.138.862-.81 1.13-2.051.102-.413.24-.744.34-.739.099.006.186-.129.195-.288.014-.259.156-.291.765-.137.395.081.804.243.918.349.094.105.467.205.825.225.358.02.652.116.645.235-.005.099.128.206.287.215.159.009.307-.142.319-.361.016-.278-.274-.454-1.292-.789-2.291-.764-2.272-.743-1.612-2.581.59-1.662.646-1.958.308-1.977-.179-.01-.367.14-.436.315ZM106.493 150.917c-.891.25-1.769.979-2.489 2.116-.328.52-.697 1.058-.822 1.17-.126.113-.423.436-.657.702-.235.286-.527.509-.666.502-.139-.008-.263.065-.268.164-.006.1-.211.208-.452.235-.3.023-.468.173-.482.431-.014.259.136.427.432.483.236.053.429.183.423.282-.005.1.109.186.249.193.119.007.526.209.891.468.499.347.591.491.386.6-.247.126-.253.245-.041.735.622 1.37 1.536 1.799 2.644 1.222l.698-.36.908.529c.481.305 1.006.554 1.145.561.139.008.272.135.325.257.049.202.148.208.316.058.188-.149.198-.348.044-.795-.135-.446-.109-.924.146-1.926.179-.728.391-1.315.49-1.309.08.004.172-.21.186-.468.014-.259.128-.512.269-.544.344-.1.544-3.359.212-3.477-.136-.067-.249-.193-.242-.313.014-.258-.476-.783-.734-.798-.119-.006-.214-.091-.208-.21.011-.199-1.238-.687-1.757-.675-.16.011-.603.086-.946.167Zm2.472 1.093c.306.236.677.735.817 1.082.302.674.31 1.971.036 2.255-.106.113-.379.716-.614 1.361-.255.644-.527 1.247-.613 1.362-.085.095-.192.588-.221 1.105-.048.874-.07.913-.541.787-.276-.055-.49-.166-.485-.246.004-.079-.381-.32-.866-.566-.485-.246-.869-.506-.864-.606.004-.079-.131-.147-.291-.155-.178-.01-.643-.255-1.065-.557-.422-.303-.887-.548-1.066-.558-.159-.008-.293-.115-.287-.215.006-.119-.168-.208-.367-.219-.696-.039-.549-.529.464-1.55.57-.567 1.146-1.253 1.32-1.522.155-.271.352-.599.457-.693.086-.115.342-.42.598-.724.235-.287.566-.508.725-.499.159.009.284-.084.29-.183.02-.378 1.999-.109 2.573.341Zm-3.409 7.588c-.016.298-1.186.174-1.468-.141-.151-.148-.312-.476-.378-.739l-.115-.444.986.572c.541.309.98.652.975.752Z"
    />
    <Path
      fill="#EA6613"
      d="M52.485 158.467c-.065.097-.27.185-.428.176-.338-.018-1.598.77-2.21 1.374-.82.792-1.761 3.033-1.603 3.779.029.201-.193.608-.572.966-1.915 1.828-.59 4.573 2.005 4.138.887-.171 1.22-.073 2.77.75.639.354 3.7.144 3.721-.233.006-.1.13-.173.289-.164.397.022 2.094-1.46 2.66-2.345.72-1.117.887-3.78.301-5.088-.443-1.001-1.351-2.247-1.67-2.265-.099-.005-.29-.156-.42-.322-.13-.167-.401-.321-.6-.332-.219-.012-.372-.121-.367-.22.007-.119-.744-.24-1.857-.302-1.054-.058-1.953-.027-2.019.088Zm3.602.857c.33.138.62.333.615.413-.005.079.11.165.25.173.496.027 1.485 1.258 1.902 2.378.435 1.16.513 2.64.139 3.277-.09.174-.355.638-.556 1.026-.464.832-1.27 1.704-1.588 1.687-.119-.007-.223.067-.228.167-.019.338-1.655.726-2.788.664-.616-.034-1.482-.242-1.91-.445l-.796-.382.078-1.412c.11-1.628-.053-1.936-1.323-2.405-.43-.163-.834-.425-.886-.567-.12-.366.231-2.021.43-2.01.1.005.187-.15.198-.348.023-.418 1.373-1.759 2.107-2.057 1.717-.763 2.795-.783 4.356-.159Z"
    />
  </Svg>
);
