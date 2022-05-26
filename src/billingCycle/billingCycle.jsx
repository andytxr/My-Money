import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import TabHeader from '../common/tab/tabHeader';
import TabsHeader from "../common/tab/tabsHeader";
import Tabs from "../common/tab/tabs";
import TabContent from "../common/tab/tabContent";
import TabsContent from "../common/tab/tabsContent";
import { selectTab, showTabs } from '../common/tab/tabActions';

class BillingCycles extends Component{

    componentWillMount(){

        this.props.selectTab('tabList');
        this.props.showTabs('tabList', 'tabCreate')

    }

    render(){

        return(

            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro"></ContentHeader>
                <Content>

                    <Tabs>
                        <TabsHeader>    
                            <TabHeader label='Listar' icon='bars' target='tabList'></TabHeader>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'></TabHeader>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'></TabHeader>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><h1>Lista</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Criar</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Apagar</h1></TabContent>
                        </TabsContent>
                    </Tabs>

                </Content>
            </div>

        )

    }

}

const mapDispatchToProps = dispatch => bindActionCreators({

    selectTab, showTabs

}, dispatch)

export default connect(null,mapDispatchToProps)(BillingCycles)