
export default {
    key: 'form',
    moduleName: 'containerComponents',
    label: '表单容器',
    preview: () => (
    //   <Form>
    //     <Field name="用户名" label="用户名" placeholder="用户名" />
    //     <Field type="password" name="密码" label="密码" placeholder="密码" />
    //     <div style="margin: 16px;">
    //       <Button round size={'small'} block type="primary">
    //         提交
    //       </Button>
    //     </div>
    //   </Form>
    ),
    render({ props, styles, block }) {
      const slots = useSlots();
      const { registerRef } = useGlobalProperties();
  
      const onSubmit = (values) => {
        console.log('onSubmit:', values);
      };
  
      return () => (
        <div style={styles}>
          <Form
            ref={(el) => registerRef(el, block._vid)}
            {...props}
            style={{ width: '100%' }}
            onSubmit={onSubmit}
          >
            {renderSlot(slots, 'default')}
          </Form>
        </div>
      );
    },
    resize: {
      height: true,
      width: true,
    },
    events: [
      { label: '提交表单且验证通过后触发', value: 'submit' },
      { label: '提交表单且验证不通过后触发', value: 'failed' },
    ],
    props: compProps,
  }