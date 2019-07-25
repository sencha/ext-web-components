/**
 * A ListItem is a container for {@link Ext.dataview.List}.
 *
 * ListItem configures and updates the {@link Ext.data.Model records} for
 * the sub-component items in a list.
 *
 * *Note*: Use of ListItem increases overhead since it generates more markup than
 * using the `SimpleListItem`. This overhead is more noticeable in Internet Explorer. If
 * possible, use the default {@link Ext.dataview.SimpleListItem}. To use the additional
 * features of this class, use the {@link Ext.dataview.List#itemConfig itemConfig} config:
 *
 * The following example shows how to configure and update sub-component items
 * in a list:
 *
 *      Ext.define('App.view.twitter.TweetListItem', {
 *          extend: 'Ext.dataview.ListItem',
 *          xtype : 'tweetlistitem',
 *
 *          requires: [
 *              'Ext.Img'
 *          ],
 *
 *          layout: 'vbox',
 *
 *          items: [{
 *              xtype: 'component',
 *              cls: 'username',
 *              reference: 'userName'
 *          }, {
 *              xtype: 'component',
 *              cls: 'text',
 *              reference: 'textCmp'
 *          }, {
 *              xtype : 'image',
 *              reference: 'avatarImg',
 *              docked: 'left',
 *              cls: 'avatar',
 *              width: 48,
 *              height: 48
 *          }],
 *
 *          dataMap: {
 *              // Set "html" config of component w/reference "userName"
 *              // to the "username" field from the associated record.
 *              //
 *              userName: {
 *                  html: 'username'
 *              },
 *
 *              textCmp: {
 *                  html: 'text'
 *              },
 *
 *              avatarImg: {
 *                  src: 'avatar_url'
 *              }
 *          }
 *      });
 *
 */
