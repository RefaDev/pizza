import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={466}
    viewBox='0 0 280 466'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='135' cy='125' r='125' />
    <rect x='0' y='258' rx='10' ry='10' width='280' height='24' />
    <rect x='146' y='274' rx='0' ry='0' width='20' height='1' />
    <rect x='0' y='300' rx='10' ry='10' width='280' height='88' />
    <rect x='4' y='419' rx='10' ry='10' width='90' height='27' />
    <rect x='120' y='408' rx='20' ry='20' width='152' height='45' />
  </ContentLoader>
)

export default Skeleton
