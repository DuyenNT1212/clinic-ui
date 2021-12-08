import { Layout } from 'antd';
import { MainHeader } from '../MainHeader';
import { MainFooter } from '../MainFooter';
import { MainContent } from '../MainContent';
import styles from './index.module.css';

export function MainLayout() {
    return(
        <Layout className={styles.mainLayout}>
            <MainHeader></MainHeader>
            <MainContent />
            <MainFooter />
        </Layout>
    )
}