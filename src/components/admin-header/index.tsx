import styles from './AdminHeader.module.scss';

const AdminHeader = ({setCollapse, collapsed}) => {

  return (
    <header className={`${styles.adminHeader} ${collapsed ? styles.collapsed : ''}`}>
        <div className="container">
            <nav>
                <div>
                <svg
                onClick={setCollapse}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <rect width="48" height="48" rx="10" fill="#212844" />
            <line
              x1="12.75"
              y1="15.25"
              x2="37.25"
              y2="15.25"
              stroke="#008ECC"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="12.75"
              y1="24.25"
              x2="30.1591"
              y2="24.25"
              stroke="#008ECC"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="12.75"
              y1="33.25"
              x2="24.25"
              y2="33.25"
              stroke="#008ECC"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default AdminHeader